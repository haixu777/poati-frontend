<template lang="html">
  <div class="clearfix container" style="">
    <el-tabs v-model="activeName" type="" @tab-click="handleTabClick">
      <el-tab-pane label="资格审核系统" name="user">
        <div class="user_manage">
          <div class="condition_container">
            <div class="condition_container_left">
              <el-radio-group v-model="fetchDataCondition.conditionStatus" @change="handleConditionSelect()">
                <el-radio-button :label="1">已通过</el-radio-button>
                <el-radio-button :label="0">全部</el-radio-button>
                <el-radio-button :label="-1">待审核</el-radio-button>
                <el-radio-button :label="2">已拒绝</el-radio-button>
                <el-radio-button :label="3">已更新</el-radio-button>
              </el-radio-group>
            </div>
            <div class="condition_container_right">
              <el-input placeholder="请输入内容" v-model="fetchDataCondition.searchText" @keyup.enter.native="handleSearch()">
                <el-select v-model="fetchDataCondition.searchType" slot="prepend" placeholder="请选择">
                  <el-option label="队伍名称" value="1"></el-option>
                  <el-option label="姓名" value="2"></el-option>
                  <el-option label="用户名" value="3"></el-option>
                  <el-option label="手机号" value="4"></el-option>
                </el-select>
                <el-button slot="append" icon="search" @click="handleSearch()"></el-button>
              </el-input>
            </div>
          </div>
          <div class="">
            <el-table class="myTable" :data="tableData" style="width: 100%;" :stripe="true" height="600" :border="true" v-loading="loading" element-loading-text="拼命加载中">
              <el-table-column type="expand">
                <template scope="props">
                  <el-form label-position="left" inline class="my_table_expand">
                    <el-form-item label="用户名"><span>{{ props.row.username }}</span></el-form-item>
                    <el-form-item label="IP地址"><span>{{ props.row.ipAddress }}</span></el-form-item>
                    <el-form-item label="参赛项目"><span>{{ props.row.contest }}</span></el-form-item>
                    <el-form-item label="操作系统"><span>{{ props.row.system }}</span></el-form-item>
                    <el-form-item label="队员"><span>{{ props.row.teamMate }}</span></el-form-item>
                    <el-form-item label="资源要求" class="el_form_full"><span>{{ props.row.info }}</span></el-form-item>
                    <el-form-item label="研究方向" class="el_form_full"><span>{{ props.row.research }}</span></el-form-item>
                    <el-form-item label="拒绝理由" class="el_form_full" v-if="props.row.status == 2"><span>{{ props.row.rejectedReason }}</span></el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="teamName" label="队伍名称"></el-table-column>
              <el-table-column prop="name" label="联系人"></el-table-column>
              <el-table-column prop="phone" label="电话"></el-table-column>
              <el-table-column prop="email" label="邮箱"></el-table-column>
              <el-table-column prop="unit" label="单位"></el-table-column>
              <el-table-column
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
      </el-tab-pane>
      <el-tab-pane label="新闻管理系统" name="news">
        <div class="news_manage">

        </div>
      </el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
      activeName: 'user',
      fetchDataCondition: {
        conditionStatus: 0,
        searchText: '',
        searchType: '',
        currentPage: 1,
        perItem: 20
      },
      totalItem: 300,
      loading: false,
      tableData: [
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 0, info: '阿卡水济你阿萨德门口拉苏门答腊卡门答腊琼敏我离开母亲为了兰看到啊苏门答腊卡苏门答腊那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '请张三, 的李四, 没看到, 麦当劳, 阿萨德', research: '致力于研究阿萨德那是看见的那水济电脑啊啊苏门答腊卡什么达科啦莫斯科老大请我IE我家肉 i 为鸣阿萨德那块水济你的卡僵尸那达科家阿森纳那是看见你的家卡是你的健康那是看见的那卡僵尸那达科就能看见我拿起看见的阿卡苏门答腊卡吗胜兰看到没撒的看见的那句可是那达科家阿森纳的刷卡机的那块家阿森纳的家锣开道麻烦，阿萨德；拉萨水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 2, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡', rejectedReason: 'blablabla' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: -1, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 2, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡', rejectedReason: 'blablabla' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 1, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 2, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 2, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: -1, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: -1, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 0, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: -1, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' },
        { teamName: '阿克索德呢', name: '王海旭', phone: '18394028491', email: 'aksjdn@gmail.com', unit: '中科院信工所', ipAddress: '127.0.0.1', username: 'wanghaixu', status: 0, info: '阿卡水济你那是达科呢', contest: '说话人识别，音视频对比', system: 'Ubuntu14.04', teamMate: '张三, 李四, andy', research: '致力于研究阿萨德那是看见的那水济电脑啊水济电脑为伍 u 从农历卡' }
      ]
    }
  },
  methods: {
    handleTabClick (tab, event) {
    },
    handleConditionSelect () {
      console.log(this.fetchDataCondition)
      console.log(this.fetchDataCondition.conditionStatus)
      this.fetchTeamListDataFromServer()
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
      this.$prompt('请输入拒绝理由', '提示', {
        confirmButtonText: '确认拒绝',
        confirmButtonClass: 'error',
        cancelButtonText: '取消',
        inputValidator: function (value) {
          if (!(value.trim())) {
            return '拒绝理由不能为空'
          }
          return true
        }
      }).then(({value}) => {
        this.$notify({
          title: '审核拒绝',
          message: `
              参赛队伍：${item.teamName}
            `,
          type: 'error'
        })
        item.status = 2
        item.rejectedReason = value
        console.log('rejected ' + item.teamName)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消拒绝'
        })
      })
    },
    handleSizeChange (val) {
      console.log('每页' + val + '条')
      this.fetchDataCondition.perItem = val
      this.fetchTeamListDataFromServer()
    },
    handleCurrentChange (val) {
      console.log('当前页:' + val)
      this.fetchDataCondition.currentPage = val
      this.fetchTeamListDataFromServer()
    },
    handleSearch () {
      if (!this.fetchDataCondition.searchType) {
        this.$message({
          showClose: true,
          message: '请选择搜索类型',
          type: 'warning'
        })
      } else {
        this.fetchTeamListDataFromServer()
      }
    },
    mockLoading () {
      this.loading = true
      const that = this
      setTimeout(() => {
        that.loading = false
      }, 800)
    },
    fetchTeamListDataFromServer () {
      this.loading = true
      this.$http.get('http://10.10.28.40:8080/iie-icm/api/vertify/getTeamList.do',
        {
          params: this.fetchDataCondition
        }
      ).then((response) => {
        console.log(response)
        if (response.body.success) {
          this.tableData = response.body.teamList
          this.totalItem = response.body.totalItem
        } else {
          console.log(response.body.msg)
        }
        this.loading = false
      })
      .then((err) => {
        console.log(err)
        this.loading = false
      })
    }
  },
  mounted () {
    // this.fetchTeamListDataFromServer()
    store.commit('changeTitle', '')
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
    text-align: left;
    tr {
      text-align: left;
    }
    .my_table_expand {
      font-size: 0;
      label {
        width: 90px;
        color: #99a9bf;
      }
      .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
      }
      .el_form_full {
        width: 100%;
        span {
          width: 949px;
          float: left;
        }
      }
    }
  }
  .el-pagination {
    text-align: right;
  }

  .clearfix {
    overflow: auto;
    _height: 1%;
  }

</style>
