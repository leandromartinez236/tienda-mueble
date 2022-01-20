// menuController.js tiene que tener una función llamada getMenu que se encargue de
// primeramente recibir el array de menú creado en menuModel.js (usar la palabra import)
// y con ese array llamar a la función showMenu creada en showMenu.js

import { menuItems } from "../model/menuModel.js"
import { showMenu } from "../view/showMenu.js"

export function getMenu () {
 showMenu(menuItems)
}
