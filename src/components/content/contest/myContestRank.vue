<template lang="html">
  <div class="">
    数据集版本&nbsp;&nbsp;&nbsp;
    <el-radio-group v-model="fetchDataCondition.dataVersion" @change="handleDataVersionChange">
      <el-radio :label="1">1.0</el-radio>
      <el-radio :label="2">2.0</el-radio>
      <el-radio :label="3">3.0</el-radio>
    </el-radio-group>
    <el-table
      :data="tableData"
      height="444"
      style="width: 100%">
      <el-table-column prop="no" label="排行" width="70"></el-table-column>
      <el-table-column prop="teamName" label="队伍名称" width="120"></el-table-column>
      <el-table-column prop="createTime" label="开始时间" width="180"></el-table-column>
      <el-table-column prop="finishTime" label="结束时间" width="180"></el-table-column>
      <template v-for="item in value">
        <el-table-column :prop="item" :label="item" :className="item===zhibiao?'zhibiao':''"></el-table-column>
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
    },
    value: {
      type: Array,
      default: function () {
        return ['precision', 'recall', 'f1']
      }
    },
    zhibiao: {
      type: String,
      default: 'f1'
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
    handleDataVersionChange () {
      this.fetchTableDataFromServer()
    },
    fetchTableDataFromServer () {
      this.$http.get('rank/details.do',
        {
          params: this.fetchDataCondition
        }
      ).then((res) => {
        console.log(res)
        if (res.data.success) {
          this.labelList = res.data.labelList
          this.tableData = res.data.teamRankList
          this.totalItem = res.data.totalItem
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

<style lang="scss">
  .zhibiao {
    background: rgba(245,174,4,.5);
  }
</style>
