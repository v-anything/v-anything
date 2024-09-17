import type { ObjectDirective } from 'vue'

interface MenuOption { label: string, onClick: () => any }

const MenuDiv = '__vAnythingMenuDiv__'

function createMenuDiv(el, menuOptions: MenuOption[]) {
  const menu = document.createElement('div')
  menu.style.position = 'absolute'
  menu.style.display = 'none'
  menu.style.backgroundColor = '#fff'
  menu.style.border = '1px solid #ccc'
  menu.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)'
  menu.style.zIndex = '1000'
  menuOptions.forEach((option) => {
    const item = document.createElement('div')
    item.textContent = option.label
    item.style.padding = '8px 12px'
    item.style.cursor = 'pointer'
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#cecece'
    })
    item.addEventListener('mouseout', () => {
      item.style.backgroundColor = 'white'
    })
    if (option.onClick) {
      item.addEventListener('click', () => {
        option.onClick()
        menu.style.display = 'none' // Hide menu after clicking
      })
    }

    menu.appendChild(item)
  })
  el.appendChild(menu)
  return menu
}

export const vRightclick: ObjectDirective<HTMLElement, MenuOption[]> = {
  mounted(el, binding) {
    if (!binding.value) {
      throw new Error('vRightclick needs an option')
    }
    const menu = createMenuDiv(el, binding.value)
    el[MenuDiv] = menu
    el.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      menu.style.left = `${e.pageX}px`
      menu.style.top = `${e.pageY}px`
      menu.style.display = 'block'
    })
    document.body.addEventListener('click', () => {
      menu.style.display = 'none'
    })
  },
  unmounted(el) {
    el.removeEventListener('contextmenu', () => {
      el[MenuDiv]?.remove()
    })
  },
}
