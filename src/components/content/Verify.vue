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
              <el-input placeholder="请输入内容" v-model="fetchDataCondition.searchText" @keyup.enter.native="handleSearch()" @change="autoSearch(fetchDataCondition.searchText)">
                <el-select v-model="fetchDataCondition.searchType" slot="prepend" placeholder="请选择">
                  <el-option label="队伍名称" value="1"></el-option>
                  <el-option label="联系人" value="2"></el-option>
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
                    <el-form-item label="用户名"><span>{{ props.row.userName }}</span></el-form-item>
                    <el-form-item label="参赛项目"><span>{{ props.row.contest }}</span></el-form-item>
                    <el-form-item label="队员"><span>{{ props.row.teamMate }}</span></el-form-item>
                    <el-form-item label="IP地址"><span>{{ props.row.ipAddress }}</span></el-form-item>
                    <el-form-item label="os"><span>{{ props.row.os }}</span></el-form-item>
                    <el-form-item label="队伍头像"><span><img :src="props.row.teamPictureUrl?props.row.teamPictureUrl:require('assets/avatar.png')" alt="avatar" style="width: 60px;height: 60px;border-radius: 50%;border: 3px solid #eee;"></span></el-form-item>
                    <el-form-item label="研究方向" class="el_form_full"><span>{{ props.row.research }}</span></el-form-item>
                    <el-form-item label="拒绝理由" class="el_form_full" v-if="props.row.status == 2"><span>{{ props.row.rejectedReason }}</span></el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column prop="teamName" label="队伍名称"></el-table-column>
              <el-table-column prop="name" label="联系人"></el-table-column>
              <el-table-column prop="phone" label="电话"></el-table-column>
              <el-table-column prop="email" label="邮箱"></el-table-column>
              <el-table-column prop="institute" label="单位"></el-table-column>
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
            <el-form ref="newsForm" :model="newsForm" :rules="newsRule" label-width="90px">
              <el-form-item label="新闻标题" prop="title">
                <el-input v-model="newsForm.title"></el-input>
              </el-form-item>
              <el-form-item label="缩略图" v-if="newsId">
                <el-upload class="avatar-uploader" :action="interfaceUrl+'/vertify/news/uploadImage.do'" :headers="{token: token}" :data="{ id: newsId }" :show-file-list="false" :on-success="handleAvatarScucess" :before-upload="beforeAvatarUpload">
                  <img v-if="imageURL" :src="imageURL" class="avatar">
                  <i v-else class="el-icon-plus" id="avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="作者" prop="author">
                <el-input v-model="newsForm.author"></el-input>
              </el-form-item>
              <el-form-item label="概要" prop="desc">
                <el-input type="textarea" v-model="newsForm.desc" :maxlength="250" placeholder="最多输入250个字"></el-input>
              </el-form-item>
              <el-form-item label="时间">
                <el-date-picker type="datetime" v-model="newsForm.time" placeholder="选择时间日期" ></el-date-picker>
              </el-form-item>
              <el-form-item label="新闻内容">
                <editor :content="newsForm.text" :height="300" :z-index="1000" :auto-height="false" @change="updateDate" :progressComputable="imageProgressComputable"></editor>
              </el-form-item>
              <el-form-item>
                <el-button type="warning" @click="postNewsToServer('newsForm')">确认发布</el-button>
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
import config from '../../../config'
import 'font-awesome/css/font-awesome.min.css'

const VueHtml5Editor = require('vue-html5-editor')
const formatNewsList = require('../../../utils/util')
const editor = new VueHtml5Editor({
  // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效
    // global component name
    name: "vue-html5-editor",
    // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称
    // if set true,will append module name to toolbar after icon
    showModuleName: true,
    // 自定义各个图标的class，默认使用的是font-awesome提供的图标
    // custom icon class of built-in modules,default using font-awesome
    icons: {
        text: "fa fa-pencil",
        color: "fa fa-paint-brush",
        font: "fa fa-font",
        align: "fa fa-align-justify",
        list: "fa fa-list",
        link: "fa fa-chain",
        unlink: "fa fa-chain-broken",
        tabulation: "fa fa-table",
        image: "fa fa-file-image-o",
        hr: "fa fa-minus",
        eraser: "fa fa-eraser",
        undo: "fa-undo fa",
        "full-screen": "fa fa-arrows-alt",
        info: "fa fa-info",
    },
    // 配置图片模块
    // config image module
    image: {
        // 后端图片上传的地址，如果为空，默认转图片为base64
        // Url of the server-side,default null and convert image to base64
        server: (process.env.NODE_ENV === 'development' ? config.dev.env.interfaceUrl : (config.build.env.interfaceUrl).replace(/"/g, '')) + '/news/imageUpload.do',
        // 请求时表单参数名
        // the name for file field in multipart request
        fieldName: "image",
        // 文件最大体积，单位字节  max file size
        // sizeLimit: 512 * 1024,
        // 是否压缩，默认true，设置为true时会使用localResizeIMG进行压缩
        // default true,if set to true,the image will resize by localResizeIMG (https://github.com/think2011/localResizeIMG)
        compress: true,
        // 图片压缩选项
        // follows are options of localResizeIMG
        width: 1600,
        height: 1600,
        quality: 80,
        // 响应数据处理
        // handle response data，return image url
        uploadHandler(responseText){
            //default accept json data like  {ok:false,msg:"unexpected"} or {ok:true,data:"image url"}
            var json = JSON.parse(responseText)
            console.log(json)
            if (json.success) {
              return json.data
            } else {
              console.log(json.msg)
            }
        }
    },
    // 语言，内建的有英文（en-us）和中文（zh-cn）
    //default en-us, en-us and zh-cn are built-in
    language: "zh-cn",
    // 自定义语言
    i18n: {
        //specify your language here
        "zh-cn": {
            "align": "对齐方式",
            "image": "图片",
            "list": "列表",
            "link": "链接",
            "unlink": "去除链接",
            "table": "表格",
            "font": "文字",
            "full screen": "全屏",
            "text": "排版",
            "eraser": "格式清除",
            "info": "关于",
            "color": "颜色",
            "please enter a url": "请输入地址",
            "create link": "创建链接",
            "bold": "加粗",
            "italic": "倾斜",
            "underline": "下划线",
            "strike through": "删除线",
            "subscript": "上标",
            "superscript": "下标",
            "heading": "标题",
            "font name": "字体",
            "font size": "文字大小",
            "left justify": "左对齐",
            "center justify": "居中",
            "right justify": "右对齐",
            "ordered list": "有序列表",
            "unordered list": "无序列表",
            "fore color": "前景色",
            "background color": "背景色",
            "row count": "行数",
            "column count": "列数",
            "save": "确定",
            "upload": "上传",
            "progress": "进度",
            "unknown": "未知",
            "please wait": "请稍等",
            "error": "错误",
            "abort": "中断",
            "reset": "重置"
        }
    },
    // 隐藏不想要显示出来的模块
    // the modules you don't want
    hiddenModules: [],
    // 自定义要显示的模块，并控制顺序
    // keep only the modules you want and customize the order.
    // can be used with hiddenModules together
    visibleModules: [
        "text",
        "color",
        "font",
        "align",
        "list",
        "link",
        "unlink",
        "tabulation",
        "image",
        "hr",
        "eraser",
        "undo",
        "full-screen",
        "info",
    ],
    // 扩展模块，具体可以参考examples或查看源码
    // extended modules
    modules: {
        //omit,reference to source code of build-in modules
    }
})

export default {
  data () {
    return {
      limitDate: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      token: localStorage.getItem('token'),
      activeName: 'user',
      fetchDataCondition: {
        conditionStatus: 0,
        searchText: '',
        searchType: '',
        currentPage: 1,
        perItem: 20
      },
      imageURL: '',
      totalItem: 300,
      loading: false,
      tableData: [],
      newsList: [],
      defaultNewsProps: {
        children: 'children',
        label: 'label'
      },
      interfaceUrl: '',
      newsForm: {
        id: '',
        title: '',
        desc: '',
        author: '',
        time: '',
        avatar: '',
        text: ''
      },
      newsRule: {
        title: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '作者不能为空', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '概要不能为空', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '请选择时间', trigger: 'blur' }
        ],
        text: [
          { required: true, message: '新闻内容不能为空', trigger: 'blur' }
        ]
      },
      test: [],
      filterNewsTitle: '',
      newsId: '',
      timer: null,
      imageProgressComputable: false
    }
  },
  components: {
    editor
  },
  watch: {
    filterNewsTitle (val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    updateDate (data) {
      this.newsForm.text = data
    },
    handleTabClick (tab, event) {
      if (Number(tab.index) === 1) {
        this.fetchNewsListFromServer()
      } else if (Number(tab.index) === 0) {
        this.fetchTeamListDataFromServer()
      }
    },
    autoSearch (val) {
      clearTimeout(this.timer)
      let _this = this;
      this.timer = setTimeout(() => {
        _this.fetchDataCondition.searchText = val
        _this.handleSearch()
      }, 600)
    },
    handleConditionSelect () {
      this.fetchTeamListDataFromServer()
    },
    handleTeamToServer (id, status, rejectedMsg, cb) {
      this.$http.post('vertify/handleTeam.do', {
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
        if (Number(d.body.success) === 1) {
          this.$notify({
            title: '审核通过',
            message: '参赛队伍：' + item.teamName,
            type: 'success'
          })
          item.status = 1
          // console.log('accepted ' + item.teamName)
        } else if (Number(d.body.success) === -1) {
          this.$notify.error({
            title: '操作失败',
            message: d.body.msg
          })
          // console.log('accepted ' + item.teamName)
        } else {
          this.$message({
            showClose: true,
            message: '登录信息过期，请注销并重新登录',
            type: 'warning'
          })
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
          if (d.body.success) {
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
          } else {
            this.$message({
              showClose: true,
              message: '登录信息失效，请注销并重新登录',
              type: 'warning'
            })
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
      this.$http.get('vertify/getTeamList.do',
        {
          // params: this.fetchDataCondition
          params: {
            searchText: encodeURI(this.fetchDataCondition.searchText),
            conditionStatus: this.fetchDataCondition.conditionStatus,
            searchType: this.fetchDataCondition.searchType,
            currentPage: this.fetchDataCondition.currentPage,
            perItem: this.fetchDataCondition.perItem
          }
        }
      ).then((response) => {
        if (response.body.success) {
          this.tableData = response.body.teamList
          this.totalItem = response.body.totalItems
        } else {
          this.$message({
            showClose: true,
            message: '登录信息失效，请注销并重新登录',
            type: 'warning'
          })
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
      if (!data.id) {
        this.handleAddNews()
        return;
      }
      this.handleFetchNewsDetail()
      // console.log(this.newsForm)
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
        time: '',
        text: ''
      }
      this.newsId = ''
    },
    postNewsToServer (formName) {
      var that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('vertify/news/update.do', this.newsForm)
            .then((d) => {
              console.log(d)
              if (d.body.success) {
                this.fetchNewsListFromServer()
                this.handleAddNews()
                this.$message({
                  message: d.body.msg,
                  type: 'success'
                })
              } else {
                this.$message({
                  showClose: true,
                  message: '登录信息失效，请注销并重新登录',
                  type: 'warning'
                })
              }
            })
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    deleteNewsFromServer () {
      this.$http.post('vertify/news/delete.do', {
        id: Number(this.newsId)
      })
        .then((d) => {
          if (d.body.success) {
            this.$message({
              message: '新闻删除成功',
              type: 'success'
            })
            this.fetchNewsListFromServer()
            this.handleAddNews()
          } else {
            this.$message({
              showClose: true,
              message: '登录信息失效，请注销并重新登录',
              type: 'warning'
            })
          }
        })
    },
    fetchNewsListFromServer () {
      this.$http.get('vertify/news/fetchList.do')
        .then((d) => {
          if (d.body.success) {
            this.newsList = formatNewsList.formatNewsList(d.body.newsList)
          } else {
            this.$message({
              showClose: true,
              message: '登录信息失效，请注销并重新登录',
              type: 'warning'
            })
          }
        })
    },
    handleFetchNewsDetail () {
      this.$http.get('news/details.do',
        {
          params: {
            id: this.newsId
          }
        }
      ).then((d) => {
        console.log(d)
        this.newsForm = {
          id: d.body.newsData.id,
          title: d.body.newsData.title,
          author: d.body.newsData.author,
          time: d.body.newsData.time,
          desc: d.body.newsData.desc,
          text: d.body.newsData.text
        }
        this.imageURL = d.body.newsData.avatar
        //this.editor.setContent(d.body.newsData.text)
      })
    },
    handleAvatarScucess (res, file) {
      this.imageURL = URL.createObjectURL(file.raw);
      // this.imageURL = URL.createObjectURL(res.avatar)
    },
    beforeAvatarUpload (file) {
      console.log(file)
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isLt2M;
    },
    handleAvatarUrl () {
      this.interfaceUrl = process.env.NODE_ENV === 'development' ? config.dev.env.interfaceUrl : (config.build.env.interfaceUrl).replace(/"/g, '')
    }
  },
  mounted () {
    this.fetchTeamListDataFromServer()
    store.commit('changeTitle', '')
    this.handleAvatarUrl()
    document.documentElement.scrollTop = document.body.scrollTop = 0
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
  .ql-toolbar {
    line-height: normal;
  }
  .myTable {
    text-align: left;
    tr {
      text-align: left;
    }
    .my_table_expand {
      font-size: 0;
      line-height: normal;
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
        .el-form-item__content {
          vertical-align: inherit !important;
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
