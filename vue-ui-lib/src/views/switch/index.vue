<template>
  <div class="message-ex">
     <div class="swich-list"> 
       <het-switch  
        :value="value1"
        @change="onChange"
        active-text="按年付费"
        inactive-text="按月付费"
        active-color="#0f0"
        :active-value="1"
        :inactive-value="0"
        inactive-color="#f00"
        :disabled="true"
      >
      </het-switch>
     </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 1
    }
  },
  methods: {
   onChange(value) {
     this.value1 = value
   },
    goHome() {
      this.$router.push('/')
    }
  },
  beforeDestroy() {
    this.$message.closeAll()
  }
}
</script>
<style lang="scss">
  .message-ex {
    padding: 30px;
  }
  .btns {
    display: flex;
    margin-bottom: 20px;
    > span {
      padding: 6px 14px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 2px;
      margin-right: 24px;
      cursor: pointer;
    }
  }
</style>