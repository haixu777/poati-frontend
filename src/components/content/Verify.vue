<template lang="html">
  <div class="" style="margin: 15px 0;">
    <h4>资格审核系统</h4>
    <div class="container condition_container">
      <div class="condition_container_left">
        <el-radio-group v-model="fetchDataCondition.conditionStatus" @change="handleConditionSelect()">
          <el-radio-button :label="1">已通过</el-radio-button>
          <el-radio-button :label="0">全部</el-radio-button>
          <el-radio-button :label="-1">待审核</el-radio-button>
          <el-radio-button :label="2">已拒接</el-radio-button>
        </el-radio-group>
      </div>
      <div class="condition_container_right">
        <el-input placeholder="请输入内容" v-model="fetchDataCondition.searchText" @keyup.enter.native="handleSearch()">
          <el-select v-model="fetchDataCondition.searchType" slot="prepend" placeholder="请选择">
            <el-option label="队伍名称" value="1"></el-option>
            <el-option label="姓名" value="2"></el-option>
            <el-option label="用户名" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="search" @click="handleSearch()"></el-button>
        </el-input>
      </div>
    </div>
    <div class="container">
      <el-table class="myTable" :data="tableData" style="width: 100%;" :stripe="true" height="600" :border="true" v-loading="loading" element-loading-text="拼命加载中">
        <el-table-column fixed="left" prop="teamName" label="队伍名称" width="110"></el-table-column>
        <el-table-column prop="name" label="联系人"></el-table-column>
        <el-table-column prop="phone" label="电话" width="130"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
        <el-table-column prop="unit" label="单位" width="180"></el-table-column>
        <el-table-column prop="ipAddress" label="ip" width="130"></el-table-column>
        <el-table-column prop="username" label="用户名" width="120"></el-table-column>
        <el-table-column prop="info" label="硬件资源要求" width="200"></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="140">
          <template scope="scope">
            <el-button @click="handleAccepted(scope.$index, tableData)" type="success" size="small" :disabled="tableData[scope.$index].status==1">通过</el-button>
            <el-button @click="handleRejected(scope.$index, tableData)" type="danger" size="small" :disabled="tableData[scope.$index].status==2">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="fetchDataCondition.currentPage"
        :page-sizes="[20, 50, 100, 200]"
        :page-size="fetchDataCondition.perItem"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItem">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fetchDataCondition: {
        conditionStatus: 0,
        searchText: '',
        searchType: '',
        currentPage: 1,
        perItem: 20
      },
      totalItem: 300,
      loading: true,
      tableData: [
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 0, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 2, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: -1, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 2, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 2, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 2, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: -1, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: -1, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 0, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: -1, info: '阿卡水济你那是达科呢' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 0, info: '阿卡水济你那是达科呢' }
      ]
    }
  },
  methods: {
    handleConditionSelect () {
      console.log(this.fetchDataCondition)
      console.log(this.fetchDataCondition.conditionStatus)
      this.mockLoading()
    },
    handleAccepted (index, rows) {
      let item = rows[index]
      this.$notify({
        title: '审核通过',
        message: '参赛队伍：' + item.teamName,
        type: 'success'
      })
      item.status = 1
      console.log('accepted ' + item.teamName)
    },
    handleRejected (index, rows) {
      let item = rows[index]
      this.$notify({
        title: '审核拒绝',
        message: '参赛队伍：' + item.teamName,
        type: 'error'
      })
      item.status = 2
      console.log('rejected ' + item.teamName)
    },
    handleSizeChange (val) {
      console.log('每页' + val + '条')
      this.fetchDataCondition.perItem = val
      this.mockLoading()
    },
    handleCurrentChange (val) {
      console.log('当前页:' + val)
      this.fetchDataCondition.currentPage = val
    },
    handleSearch () {
      if (!this.fetchDataCondition.searchType) {
        this.$message({
          showClose: true,
          message: '请选择搜索类型',
          type: 'warning'
        })
      } else {
        this.mockLoading()
      }
    },
    mockLoading () {
      this.loading = true
      const that = this
      setTimeout(() => {
        that.loading = false
      }, 800)
    }
  },
  mounted () {
    this.mockLoading()
  }
}
</script>

<style lang="scss">
  .condition_container {
    .condition_container_left {
      float: left;
    }
    .condition_container_right {
      float: right;
      width: 30%;
      .el-select {
        .el-input {
          width: 103px;
        }
      }
    }
  }
  .myTable {
    tr {
      text-align: left;
    }
  }
  .el-pagination {
    text-align: right;
  }
</style>
