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
          <div class="news_manage_left">
            <el-input placeholder="标题过滤" v-model="filterNewsTitle"></el-input>
            <el-tree :data="newsList" :props="defaultNewsProps" @node-click="handleNodeClick" :filter-node-method="filterNode" ref="tree" accordion></el-tree>
            <el-button style="width: 100%;" @click="handleAddNews">新闻添加</el-button>
          </div>
          <div class="news_manage_right">
            <el-form ref="newsForm" :model="newsForm" label-width="80px">
              <el-form-item label="新闻标题">
                <el-input v-model="newsForm.title"></el-input>
              </el-form-item>
              <el-form-item label="缩略图">
                <el-upload class="avatar-uploader" action="//jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarScucess" :before-upload="beforeAvatarUpload">
                  <img v-if="newsForm.avatar" :src="newsForm.avatar" class="avatar">
                  <i v-else class="el-icon-plus" id="avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="作者">
                <el-input v-model="newsForm.author"></el-input>
              </el-form-item>
              <el-form-item label="概要">
                <el-input type="textarea" v-model="newsForm.desc" :maxlength="250" placeholder="最多输入250个字"></el-input>
              </el-form-item>
              <el-form-item label="时间">
                <el-date-picker type="datetime" v-model="newsForm.time" placeholder="选择时间日期" :picker-options="limitDate"></el-date-picker>
              </el-form-item>
              <el-form-item label="新闻内容">
                <div id="editor">

                </div>
              </el-form-item>
              <el-form-item>
                <el-button type="warning" @click="postNewsToServer">确认发布</el-button>
                <el-button type="danger" @click="deleteNewsFromServer" :disabled="!(newsId)">删除</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../store'
import { createEditor } from 'vueditor'
import 'vueditor/dist/css/vueditor.min.css'

const formatNewsList = require('../../../utils/util')
Vue.use(Vuex)

export default {
  data () {
    return {
      limitDate: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
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
      ],
      newsList: [
        {
          id: 1,
          title: 'title2017-3',
          desc: 'desc1',
          time: '1488355269',
          author: 'author1',
          text: 'text1'
        },
        {
          id: 10,
          title: 'title2017-3_test',
          desc: 'desc1',
          time: '1488355269',
          author: 'author1',
          text: 'text1'
        },
        {
          id: 2,
          title: 'title2017-2',
          desc: 'desc2',
          time: '1487318469',
          author: 'author1',
          text: 'text1'
        },
        {
          id: 3,
          title: 'title2016-12',
          desc: 'desc1',
          time: '1482998469',
          author: 'author1',
          text: 'text1'
        },
        {
          id: 4,
          title: 'title2016-8',
          desc: 'desc1',
          time: '1470902469',
          author: 'author1',
          text: 'text1'
        },
        {
          id: 5,
          title: 'title2016-3',
          desc: 'desc1',
          time: '1457683269',
          author: 'author1',
          text: 'text1'
        },
        {
          id: 6,
          title: 'title2016-1',
          desc: 'desc1',
          time: '1452499269',
          author: 'author1',
          text: 'text1'
        }
      ],
      defaultNewsProps: {
        children: 'children',
        label: 'label'
      },
      newsForm: {
        id: '',
        title: '',
        desc: '',
        author: '',
        time: '',
        avatar: ''
      },
      editor: '',
      test: [],
      filterNewsTitle: '',
      newsId: ''
    }
  },
  watch: {
    filterNewsTitle (val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    handleTabClick (tab, event) {
      if (tab.index === 1) {
        this.fetchNewsListFromServer()
        this.editor = this.editorInit()
      }
    },
    handleConditionSelect () {
      this.fetchTeamListDataFromServer()
    },
    handleTeamToServer (id, status, rejectedMsg, cb) {
      this.$http.post('http://10.10.28.40:8080/iie-icm/api/vertify/handleTeam.do', {
        id: id,
        status: status,
        rejectedMsg: rejectedMsg
      })
        .then((d) => {
          cb(d)
        })
    },
    handleAccepted (index, rows) {
      console.log('access')
      let item = rows[index]
      this.handleTeamToServer(item.id, 1, '', (d) => {
        if (d.success) {
          this.$notify({
            title: '审核通过',
            message: '参赛队伍：' + item.teamName,
            type: 'success'
          })
          item.status = 1
          console.log('accepted ' + item.teamName)
        }
      })
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
        this.handleTeamToServer(item.id, 2, value, (d) => {
          if (d.success) {
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
          }
        })
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
    },
    handleNodeClick (data) {
      this.newsId = data.id
      this.newsForm.id = data.id
      if (!data.id) return
      this.handleFetchNewsDetail()
      // console.log(this.newsForm)
    },
    editorInit () {
      return createEditor('#editor', {
        toolbar: [
          'undo', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider',
          'bold', 'italic', 'underline', 'strikeThrough', 'divider',
          'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent',
          'insertOrderedList', 'insertUnorderedList', 'emoji', 'picture', 'switchView'
        ],
        fontName: [
          {val: '宋体, SimSun', abbr: '宋体'}, {val: '黑体, SimHei', abbr: '黑体'},
          {val: '楷体, SimKai', abbr: '楷体'}, {val: '微软雅黑, Microsoft YaHei', abbr: '微软雅黑'},
          {val: 'arial black'}, {val: 'times new roman'}, {val: 'Courier New'}
        ],
        fontSize: [
          '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'
        ],
        lang: 'cn',
        mode: 'default',
        fileuploadUrl: 'http://localhost:8080/uploadImage'
      })
    },
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    removeNode () {
      if (!this.newsId) return
      for (var i=0; i<this.newsList.length; i++) {
        if (this.newsList[i].id  === this.newsId) {
          this.newsList.splice(i, 1)
        }
      }
      this.test = formatNewsList.formatNewsList(this.newsList)
    },
    handleAddNews () {
      this.newsForm = {
        id: '',
        title: '',
        author: '',
        desc: '',
        time: ''
      }
      this.newsId = ''
      this.editor.setContent('')
    },
    postNewsToServer () {
      this.newsForm['text'] = this.editor.getContent()
      this.$http.post('http://10.10.28.40:8080/iie-icm/api/news/update.do', this.newsForm)
        .then((d) => {
          this.fetchNewsListFromServer()
          this.handleAddNews()
        })
    },
    deleteNewsFromServer () {
    },
    fetchNewsListFromServer () {
      this.$http.get('http://10.10.28.40:8080/iie-icm/api/news/fetchList.do')
        .then((d) => {
          this.newsList = formatNewsList.formatNewsList(d.body.newsList)
        })
    },
    handleFetchNewsDetail () {
      this.$http.get('http://10.10.28.40:8080/iie-icm/api/news/details.do',
        {
          params: {
            id: this.newsId
          }
        }
      ).then((d) => {
        // console.log(d)
        this.newsForm = {
          id: d.body.newsData.id,
          title: d.body.newsData.title,
          author: d.body.newsData.author,
          time: d.body.newsData.time
        }
        this.editor.setContent(d.body.newsData.text)
      })
    },
    handleAvatarScucess (res, file) {
      this.newsForm.avatar = file.url;
    },
    beforeAvatarUpload (file) {
      console.log(file)
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
  mounted () {
    this.fetchTeamListDataFromServer()
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

  .news_manage {
    text-align: left;
    .news_manage_left {
      float: left;
      width: 15%;
    }
    .news_manage_right {
      float: right;
      width: 82%;
      background: #fff;
      padding: 10px;
      border: 1px solid #d1dbe5;
      .vueditor {
        height: 400px;
        .ve-toolbar {
          line-height: normal;
        }
        .ve-design {
          line-height: normal;
          > div {
          }
        }
        .ve-dialog {
          height: 100%;
        }
      }
    }
  }

  .clearfix {
    overflow: auto;
    _height: 1%;
  }

  // upload image start//
  .el-upload {
    line-height: normal;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    width: 230px !important;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #20a0ff;
  }
  #avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 230px;
    height: 138px;
    line-height: 138px;
    text-align: center;
  }
  .avatar {
    width: 230px;
    height: 138px;
    display: block;
  }
  // upload image end//


</style>
