<template>
  <div 
    class="switch"
    :class="[
      checked ? 'is-checked' : '',
      disabled ? 'is-disabled' : ''
    ]"
    @click.prevent="handleChange"
  >
    <input 
     type="checkbox"
     class="switch__input"
     :name="name"
     :disabled="disabled"
    >
    <span 
      v-if="inactiveText"
      class="switch__label switch__label--left"
      :class="{'is-active': this.value === this.inactiveValue}"
    >
      <span>{{inactiveText}}</span>
    </span>
    <span class="switch__core" :style="{width: width + 'px', background: CoreBackground}">
      <span :class="['switch__core__circle', checked ? 'switch__core__circle__active' : 'switch__core__circle__normal']" ></span>
    </span>
    <span 
      v-if="activeText"
      class="switch__label switch__label--right"
      :class="{'is-active': this.value === this.activeValue}"
    >
      <span>{{activeText}}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HetSwitch',
  componentName: 'HetSwitch',
  props: {
    name: String,
    value: [String, Boolean, Number],
    activeText: String,
    width: {
      type: Number,
      default: 40
    },
    inactiveText: String,
    activeColor: {
      type: String,
      default: '#409eff'
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    }
  },
  computed: {
    checked() {
      return this.value === this.activeValue
    },
    CoreBackground() {
      return this.value === this.activeValue ? this.activeColor : this.inactiveColor
    }
  },
  methods: {
    handleChange() {
      if (this.disabled) return
      let newVal = (this.value === this.activeValue) ? this.inactiveValue : this.activeValue
      this.$emit('change', newVal)
      this.$emit('input', newVal)
    }
  }
}
</script>