
export function showMenu(menuItems) {
  menuItems.forEach(items => {
    const navegacion = document.querySelector('nav.navegacion')
    const a = document.createElement('a')
    a.innerText = items.name
    a.href = items.link
    navegacion.appendChild(a)
  })
}