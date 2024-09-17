import type { ObjectDirective } from 'vue'

interface Binding {
  value: string
}

export const vWatermark: ObjectDirective<HTMLElement, Binding> = {
  mounted(el, binding) {
    if (binding.value) {
      el.style.setProperty('background-image', `url("${binding.value}")`)
    }
  },
}
