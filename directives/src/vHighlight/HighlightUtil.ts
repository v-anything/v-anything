import { nanoid } from 'nanoid'
import type { Binding, IHighlightUtil, StyleValue } from './types'

const DefaultHighlightName = 'default-highlight-'
const HighlightPrefix = 'rainbow-color-'

function apiAvailableHandler() {
  if (!CSS.highlights) {
    console.warn('browser does not support CSS custom highlight API')
    return false
  }
  return true
}

export class HighlightUtil implements IHighlightUtil {
  binding: { value: Binding }
  wordHighLightMap: Map<string, Highlight>
  customHighlightStyle: boolean
  toLowerCase: boolean
  randomId: string
  defaultHighlightName: string
  hilightPrefix: string
  createdTags: Map<string, HTMLElement>

  constructor(binding: { value: Binding }) {
    if (!apiAvailableHandler())
      return

    this.wordHighLightMap = new Map()
    this.createdTags = new Map()
    this.binding = { value: { keywords: [], options: {} } }

    this.randomId = nanoid()
    this.defaultHighlightName = `${DefaultHighlightName + this.randomId}-`
    this.hilightPrefix = `${HighlightPrefix + this.randomId}-`

    this.initCSSHighlights(binding)
  }

  /**
   * set custom highlight style to HTML
   */
  private initCSSHighlights(binding: { value: Binding }) {
    if (binding === this.binding)
      return

    const options = binding.value.options
    if (options?.defaultDecoration && options?.styleMap) {
      console.error(
        'defaultDecoration and styleMap options are mutually exclusive. Please choose one.',
      )
      return
    }
    if (!options?.defaultDecoration && !options?.styleMap) {
      console.error(
        'Please provide either defaultDecoration or styleMap options.',
      )
      return
    }

    this.binding.value.keywords = binding.value.keywords

    if (
      JSON.stringify(this.binding.value.options)
      === JSON.stringify(this.binding.value.keywords)
    ) {
      return
    } // avoid repetitive set style

    this.binding.value.options = binding.value.options

    this.customHighlightStyle = options?.styleMap !== undefined
    this.toLowerCase = options?.toLowerCase || true

    if (options?.defaultDecoration) {
      this.addHighlightStyleToHTML(
        this.defaultHighlightName,
        options?.defaultDecoration,
      )
      const highlightInstance = new Highlight()
      this.wordHighLightMap.set(this.defaultHighlightName, highlightInstance)
      CSS.highlights.set(this.defaultHighlightName, highlightInstance)
    }
    if (options?.styleMap) {
      for (const [keyword, style] of Object.entries(options?.styleMap)) {
        const kw = this.toLowerCase ? keyword.toLocaleLowerCase() : keyword
        this.addHighlightStyleToHTML(this.hilightPrefix + kw, style)
        const highlightInstance = new Highlight()
        this.wordHighLightMap.set(kw, highlightInstance)
        CSS.highlights.set(this.hilightPrefix + kw, highlightInstance)
      }
    }
  }

  public generateHighlights = (
    el: HTMLElement,
    binding: { value: Binding },
  ) => {
    this.initCSSHighlights(binding) // for mount & update
    // get text nodes
    const treeWalker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
    const allTextNodes: Node[] = []
    let currentNode = treeWalker.nextNode()
    while (currentNode) {
      allTextNodes.push(currentNode)
      currentNode = treeWalker.nextNode()
    }

    // set color for each keyword
    const keywords = binding.value.keywords
    for (let i = 0; i < keywords.length; i++) {
      const kw = this.toLowerCase ? keywords[i].toLocaleLowerCase() : keywords[i]
      allTextNodes
        .map(node => ({
          node,
          text: this.toLowerCase
            ? node.textContent.toLocaleLowerCase()
            : node.textContent,
        }))
        .forEach(({ node, text }) => {
          const indices = []
          let startPos = 0
          while (startPos < text.length) {
            const index = text.indexOf(kw, startPos)
            if (index === -1)
              break
            indices.push(index)
            startPos = index + kw.length

            const range = new Range()
            range.setStart(node, index)
            range.setEnd(node, startPos)
            this.wordHighLightMap
              .get(this.customHighlightStyle ? kw : this.defaultHighlightName)
              ?.add(range)
          }
        })
    }
  }

  private addHighlightStyleToHTML = (keyword: string, style: StyleValue) => {
    const styleTag = document.createElement('style')
    styleTag.innerHTML = `::highlight(${keyword}) { ${styleValTransformer(
      style,
    )} }`
    const keywordStyleTag = this.createdTags.get(keyword)
    if (keywordStyleTag)
      document.head.removeChild(keywordStyleTag)
    document.head.appendChild(styleTag)
    this.createdTags.set(keyword, styleTag)
  }

  public unmount = () => {
    CSS.highlights.clear()
    this.createdTags.forEach((tag) => {
      document.head.removeChild(tag)
    })
  }
}

// {color: red} => color: red;
function styleValTransformer(obj: StyleValue) {
  let css = ''
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      css += `${camelToKebab(key)}: ${obj[key]};`
    }
  }
  return css.trim()
}

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
