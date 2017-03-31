<template lang="html">
  <div class="profile_container">
    <div class="profile_left">
    </div>
    <div class="profile_right">
      <div class="basic_container">
        <div class="title">基本信息</div>
        <el-upload
          class="avatar-uploader"
          :action="interfaceUrl+'/user/uploadAvatar.do'"
          :show-file-list="false"
          :headers="{token: token}"
          :on-success="handleAvatarScucess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-form :model="profileForm" :inline="true" :rules="profileRules" ref="profileRules" label-width="110px" class="my_form">
          <el-form-item label="用户名">
            <el-input v-model="profileForm.username" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="队伍名称">
            <el-input v-model="profileForm.teamName" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="领队姓名">
            <el-input v-model="profileForm.name" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="profileForm.phone" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="电子邮件">
            <el-input v-model="profileForm.email" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="单位">
            <el-input v-model="profileForm.institute" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="研究方向" prop="research" style="width: 100%;">
            <el-input type="textarea" v-model="profileForm.research" :rows="5" placeholder="研究方向／涉及领域" :disabled="submited"></el-input>
          </el-form-item>
          <el-form-item label="队员名">
            <el-tag :key="tag" v-for="tag in profileForm.teamMate" :closable="!submited" :close-transition="false" @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" placeholder="单个成员" ref="saveTagInput" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm" style="width: 150px;"></el-input>
            <el-button v-else v-show="(!(profileForm.teamMate.length == 4)) && (!submited)" class="button-new-tag" size="small" @click="showInput">+ 成员添加</el-button>
          </el-form-item>
          <el-form-item label="参赛项目" prop="contest">
            <el-checkbox-group v-model="profileForm.contest">
              <el-checkbox v-for="(item, index) in contestList" :label="item.name" :disabled="submited"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="IP地址" prop="ipAddress">
            <el-input v-model="profileForm.ipAddress" placeholder="将加入比赛项目的VPN白名单" :disabled="submited"></el-input>
          </el-form-item>
          <!-- <el-form-item label="硬件资源要求" prop="hardwardRequire">
            <el-input type="textarea" v-model="profileForm.hardwardRequire" :rows="5" placeholder="硬件资源最低要求（CPU、内存、GPU、存储空间等）"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="minCPU" prop="minCPU">
            <el-input v-model="profileForm.minCPU" :disabled="submited"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="minGPU" prop="minGPU">
            <el-input v-model="profileForm.minGPU" :disabled="submited"></el-input>
          </el-form-item> -->
          <!-- <el-form-item label="minMemory" prop="minMemory">
            <el-input v-model="profileForm.minMemory" :disabled="submited"></el-input>
          </el-form-item> -->
          <br>
          <el-form-item label="操作系统" prop="os">
            <el-radio-group v-model="profileForm.os">
              <el-radio v-for="(item, index) in systemList" :label="item.name" :disabled="submited"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <el-button type="info" size="small" :loading="loading" @click="handleSubmit('profileRules')" :disabled="submited">{{ buttonText }}</el-button>
    </div>
    <!-- <el-button style="margin-top: 12px;" @click="prev" :disabled="active==0">上一步</el-button>
    <el-button style="margin-top: 12px;" @click="next" :disabled="active==3">下一步</el-button> -->
  </div>
</template>

<script>
import config from '../../../../config'
import store from '../../../store'
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
      submited: false,
      status: '',
      submitText: '提交',
      inputVisible: false,
      inputValue: '',
      buttonText: '',
      interfaceUrl: '',
      token: localStorage.getItem('token'),
      imageUrl: '',
      contestList: [
        { name: '事件样本发现', isExpire: false },
        { name: '事件关键元素识别', isExpire: false },
        { name: '事件抽取', isExpire: false },
        { name: '关键词抽取', isExpire: false },
        { name: '文本分类', isExpire: false },
        { name: '社交关系预测', isExpire: false },
        { name: '用户画像', isExpire: false }
      ],
      systemList: [
        { name: 'Centos7.2' },
        { name: 'Ubuntu14.04' },
        { name: 'Windows Server2012' }
      ],
      profileForm: {
        teamName: '',
        name: '',
        username: '',
        phone: '',
        institute: '',
        email: '',
        contest: [],
        teamMate: [],
        ipAddress: '',
        // minCPU: '',
        // minGPU: '',
        // minMemory: '',
        os: '',
        research: ''
      },
      profileRules: {
        teamMate: [
          { required: true, message: '至少输入一名', trigger: 'blur' }
        ],
        hardwardRequire: [
          { required: true, message: '请输入资源最低要求', trigger: 'blur' }
        ],
        os: [
          { required: true, message: '请选择一个操作系统', trigger: 'blur' }
        ],
        contest: [
          { type: 'array', required: true, message: '请至少参加一个项目', trigger: 'change' }
        ],
        ipAddress: [
          { type: 'string', required: true, validator: validateIPAddress, trigger: 'blur' }
        ],
        research: [
          { required: true, message: '研究方向不能为空', trigger: 'blur' }
        ],
        minGPU: [
          { required: true, message: 'GPU最低配置不能为空', trigger: 'blur' }
        ],
        minCPU: [
          { required: true, message: 'CPU最低配置不能为空', trigger: 'blur' }
        ],
        minMemory: [
          { required: true, message: '内存最低配置不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleAvatarScucess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      localStorage.setItem('team_avatar', res.avatar)
      store.commit('changeAvatar', res.avatar)
    },
    beforeAvatarUpload (file) {
      // const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      // return isJPG && isLt2M
      return isLt2M
    },
    handleSubmit (formName) {
      console.log(this.profileForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.submitText = '提交中'
          this.handleSubmitProfileToServer()
        } else {
          return false
        }
      })
    },
    fetchUserProfileFromServer () {
      this.$http.get('user/fetchProfile.do')
        .then((d) => {
          if (d.body.success) {
            this.profileForm = {
              teamName: d.body.userInfo.teamName,
              name: d.body.userInfo.name,
              username: d.body.userInfo.userName,
              phone: d.body.userInfo.phone,
              institute: d.body.userInfo.institute,
              email: d.body.userInfo.email,
              contest: d.body.userInfo.contest,
              teamMate: d.body.userInfo.teamMate,
              ipAddress: d.body.userInfo.ipAddress,
              // minCPU: d.body.userInfo.minCPU,
              // minGPU: d.body.userInfo.minGPU,
              // minMemory: d.body.userInfo.minMemory,
              os: d.body.userInfo.os,
              research: d.body.userInfo.research
            }
            this.submited = Boolean(d.body.userInfo.submited)
            this.status = d.body.userInfo.conditionStatus
            this.imageUrl = d.body.userInfo.teamPictureUrl
            localStorage.setItem('team_avatar', d.body.userInfo.teamPictureUrl)
            this.handleButtonText()
          } else {
            this.$message({
              showClose: true,
              message: '登录信息失效，请注销并重新登录',
              type: 'warning'
            })
          }
        })
    },
    handleSubmitProfileToServer () {
      this.$http.post('user/submitProfile.do', {
        teamMate: this.profileForm.teamMate,
        contest: this.profileForm.contest,
        ipAddress: this.profileForm.ipAddress,
        os: this.profileForm.os,
        // minCPU: this.profileForm.minCPU,
        // minGPU: this.profileForm.minGPU,
        // minMemory: this.profileForm.minMemory,
        research: this.profileForm.research
      })
        .then((d) => {
          console.log(d)
          if (d.body.success) {
            this.loading = false
            this.submitText = '提交完成'
            this.submited = Boolean(d.body.submited)
            this.$alert('您的个人信息已经提交成功，我们将会尽快审核', '通知', {
              confirmButtonText: '确定'
            })
          } else {
            this.$message.error(d.body.msg)
          }
        })
        .catch((d) => {
        })
    },
    showInput () {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleClose (tag) {
      this.profileForm.teamMate.splice(this.profileForm.teamMate.indexOf(tag), 1)
    },
    handleInputConfirm () {
      console.log(this.profileForm)
      let inputValue = this.inputValue
      if (inputValue) {
        this.profileForm.teamMate.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    handleButtonText () {
      if (this.submited) {
        this.buttonText = '待审核'
      } else {
        this.buttonText = '提交'
      }

      if (this.status === 1) {
        this.buttonText = '审核通过！'
      }
    },
    handleAvatarUrl () {
      this.interfaceUrl = process.env.NODE_ENV === 'development' ? config.dev.env.interfaceUrl : (config.build.env.interfaceUrl).replace(/"/g, '')
    }
  },
  mounted () {
    this.fetchUserProfileFromServer()
    this.handleAvatarUrl()
  }
}
</script>

<style lang="scss">
  // upload avatar start
  .avatar-uploader .el-upload {
    margin-bottom: 20px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 60px !important;
    height: 60px;
    line-height: 68px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
  // upload avatar end


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

  .el-form-item__label {
    vertical-align: inherit !important;
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
      width: 724px;
    }
  }

  .clearfix {
    overflow: auto;
    _height: 1%;
  }
</style>
