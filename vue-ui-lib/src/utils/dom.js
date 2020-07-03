// import Vue from 'vue'

// const isServer = Vue.prototype.$isServer;
// const ieVersion = isServer ? 0 : Number(document.documentMode);

export const trim = str => {
  return (str || '').replace(/^\s+|\s+$/g, '')
}

export const camelCase = str => {
  return (str||'').replace(/\-(\w)/g, (match, $1) => {
    return $1.toUpperCase()
  })
}

export const hasClass = (dom, cssClass) => {
  if (!dom ) return
  if (dom.classList) {
    return dom.classList.contains(cssClass)
  } else {
    return (' ' + dom.className + ' ').indexOf( ' ' + cssClass + ' ') > -1
  }
}

export const addClass = (dom, cssClass) => {
  if (!dom || !cssClass) return
  let curClass = dom.className
  let classes = cssClass.split(' ')
  classes.forEach(cls => {
    if (!hasClass(dom, cls)) {
      curClass += ' ' + cls
    }
  })
  dom.className = curClass
}

export const removeClass = (dom, cssClass) => {
  if (!dom ) return
  let curClass = ' ' + dom.className + ' '
  let classes = cssClass.split(' ')
  classes.forEach(cls => {
    if (dom.classList) {
      dom.classList.remove(cls)
    } else {
      curClass = curClass.replace(' ' + cls + ' ', ' ')
    }
  })
  if (!dom.classList) {
    dom.className = trim(curClass)
  }
}

/**
 * 获取style中的属性值
 * @param {*} dom 
 * @param {*} styleProperty 
 */
export const getStyle = (dom, styleProperty) => {
  try {
    let computed = window.getComputedStyle(dom, null)
    return  computed ? computed[camelCase(styleProperty)] : null
    // return computed ? computed.getPropertyValue(styleProperty) : null
  } catch (error) {
    console.log(error)
    return dom.style[styleProperty]
  }
}

/* istanbul ignore next */
export const setStyle = (dom, styleProperty, value) => {
  if (!dom || !styleProperty) return
  if (typeof styleProperty === 'object') {
    Object.keys(styleProperty).forEach(styleName => {
      dom.style[styleName] = styleProperty[styleName]
    })
  } else {
    dom.style[styleProperty] = value
  }
}