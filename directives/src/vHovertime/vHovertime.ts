import type { ObjectDirective } from 'vue'

let totalTime = 0
let startTime = 0

interface Binding {
  mouseLeaveCallback?: (time: number) => void
  unmountedCallback?: (time: number) => void
}

export const vHovertime: ObjectDirective<HTMLElement, Binding> = {
  mounted(el, binding) {
    el.onmouseenter = () => {
      startTime = Date.now()
    }
    el.onmouseleave = () => {
      const duration = Date.now() - startTime
      totalTime += duration
      if (binding.value && binding.value.mouseLeaveCallback) {
        binding.value.mouseLeaveCallback(duration)
      }
    }
  },
  unmounted(el, binding) {
    if (binding.value && binding.value.unmountedCallback) {
      binding.value.unmountedCallback(totalTime)
    }
    el.onmouseleave = null
    totalTime = 0
    startTime = 0
  },
}
