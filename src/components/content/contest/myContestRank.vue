<template lang="html">
  <div class="">
    测试次数&nbsp;&nbsp;&nbsp;
    <el-radio-group v-model="fetchDataCondition.dataVersion" @change="handleTimesChange()">
      <el-radio :label="1">第一次</el-radio>
      <el-radio :label="2">第二次</el-radio>
      <el-radio :label="3">第三次</el-radio>
    </el-radio-group>
    <el-table
      :data="tableData"
      stripe
      height="444"
      style="width: 100%">
      <template v-for="item in labelList">
        <el-table-column :prop="item.prop" :label="item.label"></el-table-column>
      </template>
    </el-table>
    <el-pagination
      style="float: right"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="fetchDataCondition.currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="fetchDataCondition.perItem"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItem">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
      ],
      labelList: [
        { prop: 'date', label: '日期' },
        { prop: 'name', label: '名字' },
        { prop: 'address', label: '地址' }
      ],
      totalItem: 50,
      fetchDataCondition: {
        project: '',
        dataVersion: 1,
        currentPage: 1,
        perItem: 10
      }
    }
  },
  props: {
    url: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    handleSizeChange (val) {
      this.fetchDataCondition.perItem = val
      this.fetchTableDataFromServer()
    },
    handleCurrentChange (val) {
      this.fetchDataCondition.currentPage = val
      this.fetchTableDataFromServer()
    },
    handleTimesChange () {
      this.fetchTableDataFromServer()
    },
    fetchTableDataFromServer () {
      this.$http.get('rank/details.do',
        {
          params: this.fetchDataCondition
        }
      ).then((res) => {
        if (res.success) {
          console.log(res)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.fetchDataCondition.project = this.url
    this.fetchTableDataFromServer()
  }
}
</script>

<style lang="css">
</style>
