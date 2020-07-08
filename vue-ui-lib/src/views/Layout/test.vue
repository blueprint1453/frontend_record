<template>
  <div class="layout">
    <div class="opration-area">
      <el-button size="small" type="primary" @click="dialogVisible2=true">新增</el-button>
      <el-button size="small" type="primary" @click="dialogVisible1=true">快捷新增</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="器件名"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="type_number"
        align="center"
        label="型号">
      </el-table-column>
      <el-table-column
        prop="spec"
        align="center"
        label="规格">
      </el-table-column>
      <el-table-column
        prop="count"
        align="center"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="stock"
        align="center"
        label="库存">
      </el-table-column>
    </el-table>

    <el-dialog
      title="新增"
      :visible.sync="dialogVisible1"
      width="30%"
      :modal="false"
      center>
      <el-form ref="form1" :model="form1" label-width="90px">
        <el-form-item label="器件">
          <el-select v-model="form1.parts" placeholder="请选择器件">
            <el-option v-for="(item, i) in partslist" :key="i" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="selectedPartsData.label" v-show="form1.parts && form1.parts!=='插件'" >
          <el-select v-model="form1.partsValue" >
            <el-option v-for="(item, i) in selectedPartsData.values" :key="i" :label="item" :value="item" ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="封装">
          <el-select v-model="form1.packSpec" placeholder="请选择器件">
            <el-option v-for="(item, i) in selectedPackSpecData.values" :key="i" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="数量">
          <el-input-number v-model="form1.count" :step="2"></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="submitForm1">保存</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="快捷新增"
      :modal="false"
      :visible.sync="dialogVisible2"
      width="30%"
    >
        <el-form ref="form2" :model="form2" label-width="90px">
          <el-form-item label="编号">
            <el-input v-model="form2.id"></el-input>
          </el-form-item>
          <el-form-item label="数量">
            <el-input-number v-model="form2.count" :step="2"></el-input-number>
          </el-form-item>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="submitForm2">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import request from '@/utils/request'
// 器件列表
const partslist = ['电阻', '电容', '电感', 'AAAA', 'BBBB', '插件']

// 器件所对应的的值映射表
const valuelistMap = {
  '电阻': {
    label: '电阻值',
    values: [1, 2, 3] // 存储电阻器件的电阻值
  },
  '电容': {
    label: '电容值',
    values: [] 
  },
  '电感': {
    label: '电感值',
    values: [] 
  },
  'AAAA': {
    label: '耐压',
    values: [] 
  },
  'BBBB': {
    label: '电流',
    values: [] 
  }
}

// 器件封装规格映射表
const packSpeclistMap = {
  '电阻': {
    label: '封装',
    values: ['ss', 'aaa'] // 存储电阻器件的电阻值
  },
  '电容': {
    label: '封装',
    values: [] 
  },
  '电感': {
    label: '封装',
    values: [] 
  },
  'AAAA': {
    label: '封装',
    values: [] 
  },
  'BBBB': {
    label: '封装',
    values: [] 
  },
  '插件': {
    label: '封装',
    values: [] 
  }
}

export default {
  name: 'layout',
  components: {
    //
  },
  data() {
    return {
      partslist: partslist, // 器件列表
      // 选择的器件对应的值列表
      selectedPartsData: {
        label: '',
        values: []
      },
      // 选择的器件对应的封装规格
      selectedPackSpecData: {
        label: '封装',
        values: []
      },
      tableData: [],
      dialogVisible1: false,
      dialogVisible2: false,
      form1: {
        parts: '',
        partsValue: '',
        packSpec: '',
        count: 1
      },
      form2: {
        id: '',
        count: 1
      }
    }
  },
  watch: {
    'form1.parts': {
      handler: function(val) {
        let partsName = val
        this.selectedPartsData = valuelistMap[partsName] || {}
        this.selectedPackSpecData = packSpeclistMap[partsName] || || {}
      }
    }
  },
  created() {
    // to do 调接口获取表格数据
  },
  methods: {
    submitForm1() {
      let {parts, partsValue, packSpec, count} = this.form1
      if (!parts) {
        return this.$message({
          message: '请选择器件再提交',
          type: 'error'
        })
        
      }
       if (parts && parts!=='插件') {
        return this.$message({
          message: '请选择' + this.selectedPartsData.label + '再提交',
          type: 'error'
        });
      }
      if (!parts) {
        return this.$message({
          message: '请选择封装规格再提交',
          type: 'error'
        })
      }
      // todo 提交保存form1的数据至后天接口
      // request({
      //   url: '',
      //   method: 'post',
      //   data: this.form1
      // }).then(res => {
        // to do
        // 在这里刷新列表数据
      // }).cahtch(error => {
        // to do
      // })
    },
    submitForm2() {
      let {id, count} = this.form2
      if (!id) {
        return this.$message({
          message: '请输入编号再提交',
          type: 'error'
        })
      }
      // todo 提交保存form2的数据至后天接口
      // request({
      //   url: '',
      //   method: 'post',
      //   data: this.form2
      // }).then(res => {
        // to do
        // 在这里刷新列表数据
      // }).cahtch(error => {
        // to do
      // })
    }
  }
}
</script>
<style lang="scss">
  .layout {
    padding: 40px;
    .opration-area {
      .el-button {
        margin-right: 20px;
        margin-bottom: 10px;
      }
    }
    .el-select {
      width: 100%;
      padding-right: 20px;
    }
  }
</style>