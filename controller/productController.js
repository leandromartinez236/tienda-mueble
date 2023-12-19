import { productos } from "../model/productModel.js"
import { showProducts } from "../view/showProduct.js"

export function getProducts() {
  showProducts(productos)
}
