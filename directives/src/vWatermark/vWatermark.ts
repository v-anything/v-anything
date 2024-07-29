import type { ObjectDirective } from 'vue'

interface Binding {
  text: string
  angle?: number
}

export const vWatermark: ObjectDirective<HTMLElement, Binding> = {
  created(_, binding) {
    if (!binding.value.text) {
      throw new Error('WaterMark text is required')
    }
  },
  mounted(el, binding) {
    const text = binding.value.text

    const canvas = document.createElement('canvas')

    const { width, height } = el.getBoundingClientRect()
    canvas.width = width
    canvas.height = height
    canvas.style.rotate = `${binding.value.angle ?? 0}deg`

    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
    ctx.fillText(text, width / 20, height / 2)

    const div = document.createElement('div')
    div.style.zIndex = '100000'
    div.style.background = `url(${canvas.toDataURL('image/png')}) left top repeat`
    div.style.width = `${width}px`
    div.style.height = `${height}px`
    div.style.position = 'absolute'
    div.style.top = '0'
    div.style.left = '0'
    div.style.pointerEvents = 'none'
    el.appendChild(div)
  },
}
