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
    xl: {
      type: [Number, Object]
    },
    lg: {
      type: [Number, Object]
    },
    md: {
      type: [Number, Object]
    },
    sm: {
      type: [Number, Object]
    },
    xs: {
      type: [Number, Object]
    }
  },
  computed: {
    gutter() {
      let parent = this.$parent
      while (parent && parent.name !== 'Row') {
        parent = parent.$parent
      }
      return parent.gutter || 0
    }
  },
  render(h) {
    let style = {}
    let classlist = [];
    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classlist.push(
          prop !== 'span' ?
          `col-${prop}-${this[prop]}` :
          `col-${this[prop]}`
        )
      }
    });
    ['xl', 'lg', 'md', 'sm', 'xs'].forEach(size => {
      if (typeof this[size] === 'number') {
        classlist.push(`col-${size}-${this[size]}`)
      }
      if (this[size] !== null && typeof this[size] === 'object') {
        let span = this[size].span
        let offset = this[size].offset
        typeof span === 'number' && classlist.push(`col-${size}-${span}`)
        typeof offset === 'number' && classlist.push(`col-offset-${offset}`)
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