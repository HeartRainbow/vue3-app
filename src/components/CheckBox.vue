<template>
  <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="checkedOptions" @change="handleCheckedOptionsChange">
      <el-checkbox v-for="item in data" :label="item" :key="item">{{ item }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
const options = ['上海', '北京', '广州', '深圳']

export default {
  name: 'CheckBoxAll',
  // model: {
  //   prop: 'data',
  //   // 随便命名事件，对应下面$emit即可
  //   event: 'input'
  // },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkAll: false,
      checkedOptions: [],
      options: this.data,
      isIndeterminate: true
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedOptions = val ?? []
      this.isIndeterminate = false
      this.$emit('change', this.checkedOptions)
      this.$emit('input', this.checkedOptions)
    },
    handleCheckedOptionsChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.options.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
      this.$emit('change', this.checkedOptions)
      this.$emit('input', this.checkedOptions)
    }
  }
}
</script>
