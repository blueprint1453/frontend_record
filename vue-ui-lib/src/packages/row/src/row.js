export default {
  name: 'Row',
  componentName: 'Row',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style() {
      let styleObj = {}
      if (this.gutter) {
        styleObj.marginLeft = `-${this.gutter / 2}px`
        styleObj.marginRight = styleObj.marginLeft
      }
      return styleObj
    }
  },
  render(h) {
    return h(this.tag, {
      style: this.style,
      class: [
        'row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== top ? `is-align-${this.align}` : ''
      ],
      style: this.style
    }, this.$slots.default)
  },
}