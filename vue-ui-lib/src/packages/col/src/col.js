
export default {
  name: 'Col',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number, // 栅格占据的列数 
      default: 24
    },
    offset: Number, // 栅格左侧的间隔格数
    pull: Number, // 栅格向左移动格数
    push: Number, // 栅格向右移动格数
  },
  computed: {
    gutter() {
      let parent = this.$parent
      while(parent && parent.name !== 'Row') {
        parent = parent.$parent
      }
      return parent.gutter || 0
    }
  },
  render(h) {
    let style = {}
    let classlist = []
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classlist.push(
          prop !== 'span'
            ? `col-${prop}-${this[prop]}`
            : `col-${this[prop]}`
        )
      }
    })
    if (this.gutter) {
      style.paddingLeft = `${this.gutter/2}px`
      style.paddingRight = style.paddingLeft
    }
    return h(this.tag, {
      class: ['col', classlist],
      style,
    }, this.$slot.default)
  },
}