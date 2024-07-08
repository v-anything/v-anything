import type { ObjectDirective } from 'vue'
import type { Binding, ElementWithHighlighter } from './types'
import { HighlightUtil } from './HighlightUtil'

export const vHighlight: ObjectDirective<ElementWithHighlighter, Binding> = {
  created(el, binding) {
    el.$highlighter = new HighlightUtil(binding)
  },

  mounted(el, binding) {
    el.$highlighter.generateHighlights(el, binding)
  },

  updated(el, binding) {
    el.$highlighter.generateHighlights(el, binding)
  },

  unmounted(el) {
    if (el.$highlighter) {
      el.$highlighter.unmount()
      el.$highlighter = null
    }
  },
}
