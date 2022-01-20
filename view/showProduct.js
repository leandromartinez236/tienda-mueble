// showProducts.js debe tener una función con el mismo nombre 
// que se encargue de renderizar el array de productos creados en productModel.js
// y mostrarlo en la sección correspondiente del html

export function showProducts(productos) {
  const template = document.getElementById('producto')
  productos.forEach(product => {
    const clone = template.content.cloneNode(true)
    const name = clone.querySelector('h3')
    name.innerText = product.name
    const descripcion = clone.querySelector('p')
    descripcion.innerText = product.description
    const imagen = clone.querySelector('img')
    imagen.src = product.image
    // imagen.src = product.image
    const precio = clone.querySelector('p.precio')
    precio.innerText = product.price
    const btn = clone.querySelector('a.btn')
    const listadoProductos = document.querySelector('div.listado-productos')
    listadoProductos.appendChild(clone)  
  })
}