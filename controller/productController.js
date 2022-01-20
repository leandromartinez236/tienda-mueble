// productController.js tiene que tener una función llamada getProducts 
// que se encargue de recibir la lista de productos (productModel.js) y
// llamar a la función showProducts (showProduct.js).

import { productos } from "../model/productModel.js"
import { showProducts } from "../view/showProduct.js"

export function getProducts() {
  showProducts(productos)
}
