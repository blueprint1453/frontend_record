<template>
  <div class="message-ex">
    <div class="btns">
      <span @click="openInfoMessage">信息</span>
      <span @click="openWarnMessage">警告</span>
      <span @click="openSuccessMessage">成功</span>
      <span @click="openErrorMessage">错误</span>
      <span @click="openTextCenterMessage">文字居中</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    openInfoMessage() {
      this.$message({
        message: '这是一段普通信息， 这是一段普通信息',
        duration: 3000
      });
    },
    openWarnMessage() {
      this.$message({
        message: '这是一段普通信息， 这是一段普通信息',
        duration: 3000,
        type: 'warn'
      });
    },
    openSuccessMessage() {
      this.$message({
        message: '这是一段普通信息， 这是一段普通信息',
        duration: 3000,
        type: 'success'
      });
    },
    openErrorMessage() {
      this.$message({
        message: '这是一段普通信息， 这是一段普通信息',
        duration: 3000,
        type: 'error'
      });
    },
    openTextCenterMessage() {
      this.$message({
        message: '这是一段普通信息， 这是一段普通信息',
        duration: 10000,
        type: 'info',
        center: true,
        showClose: true
      });
    }
  }
}
</script>
<style lang="scss">
  .message-ex {
    padding: 30px;
  }
  .btns {
    display: flex;
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