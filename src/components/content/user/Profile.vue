<template lang="html">
  <div class="profile_container">
    <div class="profile_left">
      <!-- <el-steps :space="100" direction="vertical" :active="active" finish-status="success" class="my_step">
        <el-step title="基本信息"></el-step>
        <el-step title="研究方向"></el-step>
        <el-step title="比赛配置"></el-step>
      </el-steps> -->
    </div>
    <div class="profile_right">
      <div class="basic_container">
        <div class="title">基本信息</div>
        <el-form :model="profileFrom" :inline="true" :rules="profileRules" :ref="profileFrom" label-width="100px" class="my_form">
          <el-form-item label="队伍名称">
            <el-input v-model="profileFrom.teamName" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="profileFrom.username" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="领队姓名">
            <el-input v-model="profileFrom.name" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="profileFrom.phone" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="电子邮件">
            <el-input v-model="profileFrom.email" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="单位">
            <el-input v-model="profileFrom.unit" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="队员名" prop="teamMate">
            <el-tag :key="tag" v-for="tag in profileFrom.teamMate" :closable="true" :close-transition="false" @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" placeholder="单个成员" ref="saveTagInput" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm" style="width: 150px;"></el-input>
            <el-button v-else v-show="!(profileFrom.teamMate.length == 5)" class="button-new-tag" size="small" @click="showInput">+ 成员添加</el-button>
          </el-form-item>
          <el-form-item label="参赛项目" prop="contest">
            <el-checkbox-group v-model="profileFrom.contest">
              <el-checkbox v-for="(item, index) in contestList" :label="item.name"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="IP地址" prop="ipAddress">
            <el-input v-model="profileFrom.ipAddress" placeholder="将加入比赛项目的VPN白名单"></el-input>
          </el-form-item>
          <br>
          <el-form-item label="操作系统" prop="system">
            <el-radio-group v-model="profileFrom.system">
              <el-radio v-for="(item, index) in systemList" :label="item.name"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="研究方向">
            <el-input type="textarea" v-model="profileFrom.research" :rows="5" placeholder="研究方向／涉及领域"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="education_container" v-show="active==3">
        <div class="title">预览</div>
        <el-button type="info" size="small" :loading="loading" @click="handleSubmit()" :disabled="isCompleted">{{submitText}}</el-button>
      </div>
    </div>
    <!-- <el-button style="margin-top: 12px;" @click="prev" :disabled="active==0">上一步</el-button>
    <el-button style="margin-top: 12px;" @click="next" :disabled="active==3">下一步</el-button> -->
  </div>
</template>

<script>
export default {
  data () {
    let validateIPAddress = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('ip地址不能为空'))
      }
      setTimeout(() => {
        if (!(/^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/.test(value))) {
          callback(new Error('请输入正确的ip地址'))
        } else {
          callback()
        }
      }, 1000)
    }
    return {
      active: 0,
      loading: false,
      isCompleted: false,
      submitText: '提交',
      inputVisible: false,
      inputValue: '',
      contestList: [
        { name: '说话人识别', isExpire: false },
        { name: '音频对比', isExpire: false },
        { name: '语音关键词检测', isExpire: false },
        { name: '视频拷贝检测', isExpire: false },
        { name: '特定视频识别', isExpire: false },
        { name: '视频文本关键词检测', isExpire: false },
        { name: '人脸识别', isExpire: false }
      ],
      systemList: [
        { name: 'Centos7.2' },
        { name: 'Ubuntu14.04' },
        { name: 'Windows Server2012' }
      ],
      profileFrom: {
        teamName: '',
        name: '',
        username: '',
        phone: '',
        unit: '',
        email: '',
        contest: [],
        teamMate: [],
        ipAddress: '',
        system: '',
        research: ''
      },
      profileRules: {
        teamName: [
          { required: true, message: '请输入队伍名称', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入领队名字', trigger: 'blur' }
        ],
        contest: [
          { type: 'array', required: true, message: '请至少参加一个项目', trigger: 'change' }
        ],
        ipAddress: [
          { type: 'string', required: true, validator: validateIPAddress, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.loading = true
      this.submitText = '提交中'
      let that = this
      setTimeout(() => {
        that.loading = false
        this.submitText = '提交完成'
        this.isCompleted = true
      }, 1000)
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleClose (tag) {
      this.profileFrom.teamMate.splice(this.profileFrom.teamMate.indexOf(tag), 1)
    },
    handleInputConfirm () {
      console.log(this.profileFrom)
      let inputValue = this.inputValue
      if (inputValue) {
        this.profileFrom.teamMate.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile_container {
    .profile_right {
      padding: 20px;
      float: right;
      width: 980px;
      box-shadow: 1px 1px 2px 0 rgba(0,0,0,.1);
      background: #fff;
      .title {
        text-align: left;
        font-weight: 500;
        padding-left: 10px;
        margin: 0 0 10px 0;
        border-left: 3px solid #495057;
      }
    }
  }

  .my_form {
    text-align: left;
    .el-form-item {
      text-align: left;
    }
    .el-tag {
      margin: 0 2px;
    }
  }

  .basic_container {
    .el-input {
      width: 300px;
      float: left;
    }
    .el-checkbox {
      float: left;
    }
    .el-textarea {
      width: 500px;
    }
  }

  .clearfix {
    overflow: auto;
    _height: 1%;
  }
</style>
