<template>
  <div class="layout">
    <div class="row-wrapper">
      <Row :gutter="20" justify="space-between" align="middle" class="custom-row" >
        <Col :xl="4" :lg="6" :md="8" :sm="12" :xs="24" > <div style="background: lightblue;height:100px;">dd</div></Col>
        <Col :xl="4" :lg="6" :md="8" :sm="12" :xs="24" ><div style="background: lightblue;height:100px;">dd</div></Col>
      </Row>
    </div>
    <div class="row-wrapper">
      <Row :gutter="20" align="middle" class="custom-row" >
        <Col :span="6" > <div style="background: lightblue;height:100px;">dd</div></Col>
        <Col :span="6" :offset="2" ><div style="background: lightblue;height:100px;">dd</div></Col>
      </Row>
    </div>
    <div class="row-wrapper">
      <Row :gutter="20" justify="center" align="middle" class="custom-row" >
        <Col :span="4" :pull="2"> <div style="background: lightblue;height:100px;">dd</div></Col>
        <Col :span="4" :push="2" ><div style="background: lightblue;height:100px;">dd</div></Col>
        <Col :span="4" :push="4" ><div style="background: lightblue;height:100px;">dd</div></Col>
      </Row>
    </div>
  </div>
</template>

<script>
import Row from '../../packages/row/index'
import Col from '../../packages/col/index'

export default {
  name: 'layout',
  components: {
    Row,
    Col,
  },
  data() {
    return {
     
    }
  },
  methods: {
   
  },
}
</script>
<style lang="scss">
  .layout {
    padding: 40px;
  }
  .row-wrapper {
    border: 1px solid red;
    margin-bottom: 20px;
  }
  .custom-row {
    height: 200px;
  }
</style>