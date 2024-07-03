import { nanoid } from "nanoid";
import type { Binding, IHighlightUtil, StyleValue } from "./types";

const DefaultHighlightName = "default-highlight-";
const HighlightPrefix = "rainbow-color-";

const apiAvailableHandler = () => {
  if (!CSS.highlights) {
    console.warn("browser does not support CSS custom highlight API");
    return false;
  }
  return true;
};

export class HighlightUtil implements IHighlightUtil {
  // private static instance: HighlightUtil;
  wordHighLightMap: Map<string, Highlight>;
  customHighlightStyle: boolean;
  toLowerCase: boolean;
  randomId: string;
  defaultHighlightName: string;
  hilightPrefix: string;

  constructor(binding: { value: Binding }) {
    if (!apiAvailableHandler()) return;

    this.wordHighLightMap = new Map();
    this.customHighlightStyle = binding.value.options?.styleMap !== undefined;
    this.toLowerCase = binding.value.options?.toLowerCase || true;
    this.randomId = nanoid();
    this.defaultHighlightName = DefaultHighlightName + this.randomId + "-";
    this.hilightPrefix = HighlightPrefix + this.randomId + "-";

    this.initCSSHighlights(binding);
  }

  /**
   * set custom highlight style to HTML
   */
  private initCSSHighlights(binding: { value: Binding }) {
    const options = binding.value.options;
    if (options?.defaultDecoration && options?.styleMap) {
      console.error(
        "defaultDecoration and styleMap options are mutually exclusive. Please choose one."
      );
      return;
    }
    if (!options?.defaultDecoration && !options?.styleMap) {
      console.error(
        "Please provide either defaultDecoration or styleMap options."
      );
      return;
    }

    if (options?.defaultDecoration) {
      this.addHighlightStyleToHTML(
        this.defaultHighlightName,
        binding.value.options?.defaultDecoration
      );
      const highlightInstance = new Highlight();
      this.wordHighLightMap.set(this.defaultHighlightName, highlightInstance);
      CSS.highlights.set(this.defaultHighlightName, highlightInstance);
    }
    if (options?.styleMap) {
      for (const [keyword, style] of Object.entries(options?.styleMap)) {
        this.addHighlightStyleToHTML(this.hilightPrefix + keyword, style);
        const highlightInstance = new Highlight();
        this.wordHighLightMap.set(keyword, highlightInstance);
        CSS.highlights.set(this.hilightPrefix + keyword, highlightInstance);
      }
    }
  }

  public generateHighlights = (
    el: HTMLElement,
    binding: { value: Binding }
  ) => {
    // get text nodes
    const treeWalker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const allTextNodes: Node[] = [];
    let currentNode = treeWalker.nextNode();
    while (currentNode) {
      allTextNodes.push(currentNode);
      currentNode = treeWalker.nextNode();
    }

    // set color for each keyword
    const keywords = binding.value.keywords;
    for (let i = 0; i < keywords.length; i++) {
      const kw = keywords[i];
      allTextNodes
        .map((node) => ({
          node,
          text: node.textContent.toLocaleLowerCase(),
        }))
        .map(({ node, text }) => {
          const indices = [];
          let startPos = 0;
          let i = 0;
          while (startPos < text.length) {
            i++;
            const index = text.indexOf(kw, startPos);
            if (index === -1) break;
            indices.push(index);
            startPos = index + kw.length;

            const range = new Range();
            range.setStart(node, index);
            range.setEnd(node, startPos);
            this.wordHighLightMap
              .get(this.customHighlightStyle ? kw : this.defaultHighlightName)
              .add(range);
          }
        });
    }
  };

  private addHighlightStyleToHTML = (keyword: string, style: StyleValue) => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `::highlight(${keyword}) { ${styleValTransformer(
      style
    )} }`;
    document.head.appendChild(styleTag);
  };

  public unmount = () => {
    CSS.highlights.clear();
  };
}

// {color: red} => color: red;\n
const styleValTransformer = (obj: StyleValue) => {
  let css = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      css += `${camelToKebab(key)}: ${obj[key]};\n`;
    }
  }
  return css.trim();
};

const camelToKebab = (str) => {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};
