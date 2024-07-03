import { StyleValue } from "vue";
import type { Binding, IHighlightUtil } from "./types";

const DefaultHighlight = "default-highlight";
const HighlightPrefix = "rainbow-color-"

const apiAvailableHandler = () => {
  if (!CSS.highlights) {
    console.warn("browser does not support CSS custom highlight API");
    return false;
  }
  return true;
};

export class HighlightUtil implements IHighlightUtil {
  private static instance: HighlightUtil;
  highlights: Map<string, string>;
  isRainbow: boolean;

  constructor() {
    this.highlights = new Map();
    this.initCSSHighlights();
  }

  // singleton
  public static getInstance(): HighlightUtil {
    if (!apiAvailableHandler()) return;
    if (!HighlightUtil.instance) {
      HighlightUtil.instance = new HighlightUtil();
    }
    return HighlightUtil.instance;
  }

  private initCSSHighlights(binding: { value: Binding }) {
    if (typeof binding.value.options.defaultDecoration === 'object') {

    }

    const highlightInstance = new Highlight();
    this.highlights.push(highlightInstance);
    CSS.highlights.set(`default-highlight`, highlightInstance);

    for (let i = 0; i < ; i++) {
      const highlightInstance = new Highlight();
      this.highlights.push(highlightInstance);
      CSS.highlights.set(`rainbow-color-${i}`, highlightInstance);
    }
  }

  public generateHighlights = (
    el: HTMLElement,
    binding: { value: Binding }
  ) => {
    const isRainbow = binding.value.rainbow || false;
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
      const str = keywords[i];
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
            const index = text.indexOf(str, startPos);
            if (index === -1) break;
            indices.push(index);
            startPos = index + str.length;

            const range = new Range();
            range.setStart(node, index);
            range.setEnd(node, startPos);
            this.highlights[isRainbow ? (i % 7) + 1 : 0].add(range);
          }
        });
    }
  };

  private addHighlightStyleToHTML = (keyword: string, style: StyleValue) => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `::highlight(${keyword}) { ${style} }`;
    document.head.appendChild(styleTag);
  };

  public unmount = () => {

  }
}
