import type { ObjectDirective } from 'vue'

interface Binding {
  mouseupCallback?: (selection: Selection) => void
  copyCallback?: (selection: Selection) => void
}

async function copy(selection: Selection) {
  const text = selection.toString()
  const isClipboardSupported = navigator && 'clipboard' in navigator
  if (isClipboardSupported) {
    await navigator.clipboard.writeText(text)
  }
  else {
    const execCopyPromise = new Promise((resolve, reject) => {
      try {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.position = 'absolute'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        resolve(selection)
      }
      catch (e) {
        reject(e)
      }
    })
    await execCopyPromise
  }
}

export const vSelection: ObjectDirective<HTMLElement, Binding> = {
  mounted(el, binding) {
    el.onmouseup = (_e: MouseEvent) => {
      const selection = window.getSelection()
      if (typeof binding?.value?.mouseupCallback === 'function') {
        binding.value.mouseupCallback(selection)
      }
      else {
        copy(selection).then(
          () => {
            if (typeof binding?.value?.copyCallback === 'function') {
              binding.value.copyCallback(selection)
            }
          },
        )
      }
    }
  },
  unmounted(el) {
    el.remove()
  },
}
