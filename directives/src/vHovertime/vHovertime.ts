import type { DirectiveBinding, ObjectDirective } from 'vue'

interface Binding {
  mouseLeaveCallback?: (time: number) => void
  unmountedCallback?: (time: number) => void
}

const HoverTimeInfo = '__vAnythingHoverTime__'
const MouseEnterHandler = '__vAnythingMouseEnterHandler__'
const MouseLeaveHandler = '__vAnythingMouseLeaveHandler__'

function mouseEnterHandler(el: HTMLElement) {
  if (!(el as any)[HoverTimeInfo]) {
    el[HoverTimeInfo] = {
      startTime: 0,
      totalTime: 0,
    }
  }
  el[HoverTimeInfo].startTime = Date.now()
}

function mouseLeaveHandler(el: HTMLElement, binding: DirectiveBinding<Binding>) {
  const hovertimeInfo = (el as any)[HoverTimeInfo]
  if (!hovertimeInfo)
    return
  const { startTime } = hovertimeInfo
  const duration = Date.now() - startTime
  hovertimeInfo.totalTime += duration
  if (binding.value && binding.value.mouseLeaveCallback) {
    binding.value.mouseLeaveCallback(duration)
  }
}

export const vHovertime: ObjectDirective<HTMLElement, Binding> = {
  mounted(el, binding) {
    el[MouseEnterHandler] = () => mouseEnterHandler(el)
    el[MouseLeaveHandler] = () => mouseLeaveHandler(el, binding)
    el.addEventListener('mouseenter', el[MouseEnterHandler])
    el.addEventListener('mouseleave', el[MouseLeaveHandler])
  },
  unmounted(el, binding) {
    if (binding.value && binding.value.unmountedCallback) {
      binding.value.unmountedCallback(el[HoverTimeInfo]?.totalTime)
    }
    el.removeEventListener('mouseenter', el[MouseEnterHandler])
    el.removeEventListener('mouseleave', el[MouseLeaveHandler])

    delete el[HoverTimeInfo]
    delete el[MouseEnterHandler]
    delete el[MouseLeaveHandler]
  },
}
