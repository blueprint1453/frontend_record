<template>
  <transition name="message-fade" @after-leave="handleAfterLeave" >
    <div
      v-show="visible"
      class="message"
      :class="[
        'message-' + type,
        center ? 'is-align-center': '',
        showClose ? 'has-close' : ''
      ]"
      :style="messageStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <slot>
        <p class="message-content">{{message}}</p>
      </slot>
      <span class="icon-close" v-if="showClose" @click="close" >x</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'message',
  componentName: 'message',
  data() {
    return {
      visible: false,
      verticalOffset: 20, // 离body顶部的距离
      type: 'info',
      showClose: false,
      duration: 2000,
      center: false,
      message: '',
      customClass: '',
      onClose: null
    }
  },
  computed: {
    messageStyle() {
      let style = {}
      style.top = this.verticalOffset + 'px'
      return style
    }
  },
  mounted() {
    this.startTimer()
    document.addEventListener('keydown', this.onKeydown)
  },
  methods: {
    startTimer() {
      this.clearTimer()
      this.timer = setTimeout(() => {
        this.visible && this.close()
      }, this.duration)
    },
    clearTimer() {
      this.timer && clearTimeout(this.timer)
    },
    close() {
      this.visible = false
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    onKeydown(e) {
      if (this.visible && e.keyCode===27) {
        this.close()
      }
    },
    handleAfterLeave() {
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.onKeydown)
  },
}
</script>
