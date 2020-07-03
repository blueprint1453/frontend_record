
let zIndex = 2000

let PopupManager = {}

PopupManager.nextZIndex = () => {
  return zIndex++
}

export default PopupManager