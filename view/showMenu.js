// showMenu.js debe existir una función con el mismo nombre (showMenu) 
// que tiene que recibir por parámetro un array del menú (que se creó en menuModel.js).
// Dicha función tiene que usar los métodos DOM necesarios (querySelector, getElementById, etc) 
export function showMenu (menuItems)  {
  menuItems.forEach(items => {
    const navegacion = document.querySelector('nav.navegacion')
    const a = document.createElement('a')   
    a.innerText = items.name
    a.href = items.link
    navegacion.appendChild(a)
  })
}