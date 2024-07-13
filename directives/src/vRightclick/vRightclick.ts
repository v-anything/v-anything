import type { ObjectDirective } from 'vue'

interface Binding {
  menuItems: { name: string, onClick: () => void }[]
}

export const vRightclick: ObjectDirective<HTMLElement, Binding> = {
  mounted(el) {
    let menu
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      menu = document.createElement('ul')
      menu.textContent = '23123'
      menu.className = 'context-menu'
      menu.style.position = 'absolute'
      menu.style.left = `${e.clientX}px`
      menu.style.top = `${e.clientY}px`
      menu.style.backgroundColor = 'white'
      menu.style.padding = '5px'
      menu.style.borderRadius = '5px'
      menu.style.boxShadow = '0 0 10px 0 rgba(0, 0, 0, 0.5)'
      document.body.appendChild(menu)
    })
    document.addEventListener('mousedown', (e) => {
      if (menu)
        menu.remove()
    })
  },
}
