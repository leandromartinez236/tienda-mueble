import { menuItems } from "../model/menuModel.js"
import { showMenu } from "../view/showMenu.js"

export function getMenu() {
  showMenu(menuItems)
}
