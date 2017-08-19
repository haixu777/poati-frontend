<template lang="html">
  <div class="header">
    <div class="nav">
      <div class="_container" style="">
        <img src="../assets/logo.png" alt="logo" class="img_logo">
        <ul class="nav_list">
          <li v-for="item in navList" :class="item.text==activeText?'active':''" @click="toogleActive(item.text)">
            <router-link :to="item.path">{{ item.text }}</router-link>
          </li>
        </ul>
        <ul class="login_list">
          <li class="btn_register" v-if="!isLogin">
            <div class="login">
              <button type="button" name="button" class="btn btn-link my_btn" style="font-size:15px;" @click="activeName='login'; dialogFormVisible=true; fetchVerificateCode()">登录</button>
              <span style="color:#fff;"> | </span>
              <button type="button" name="button" class="btn btn-link my_btn" style="font-size:15px;" @click="activeName='register'; dialogFormVisible=true; fetchVerificateCode()">注册</button>
            </div>
          </li>
          <li class="btn_register" v-else>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link" style="color:#fff;">
                <!-- <img :src="team_avatar?team_avatar:require('../assets/avatar.png')" style="width: 40px;height: 40px;border-radius: 50%;" alt=""> -->
                {{ '个人中心' }}<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link :to="isAdmin?'/verify':'/user/profile'" style="text-decoration: none;" @click.native="goToMyInfo()">
                    {{ isAdmin?'资格审核':'我的竞赛' }}
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link :to="'/home'" style="text-decoration: none;"  @click.native="logout()">
                    注销
                  </router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>

    <el-dialog title="" v-model="dialogFormVisible" size="" class="header_dialog">
      <el-tabs v-model="activeName" @tab-click="">
        <el-tab-pane label="用户登录" name="login">
          <el-form :inline="false" ref="userLoginInfo" :model="userLoginInfo" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="userLoginInfo.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="loginPassword">
              <el-input v-model="userLoginInfo.loginPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verificateCode">
              <div class="" style="display: inline-block; float: left;">
                <el-input v-model="userLoginInfo.verificateCode" @keyup.enter.native="login('userLoginInfo')"></el-input>
              </div>
              <div class="" @click="fetchVerificateCode" style="display: inline-block; float: left;">
                <img :src="verificateCode" alt="verification" style="float: left;width: 90px;">
              </div>
            </el-form-item>
            <el-form-item style="">
              <el-button type="primary" @click="login('userLoginInfo')" :disabled="Logining">{{ Logining?'登录中请稍等...':'登录' }}</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="队伍注册" name="register" style="text-align: left;">
          <el-form :inline="true" ref="userRegisterInfo" :model="userRegisterInfo" :rules="rules" label-width="100px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="userRegisterInfo.username" type=""></el-input>
            </el-form-item><el-form-item label="密码"  prop="password">
              <el-input v-model="userRegisterInfo.password" type="password"></el-input>
            </el-form-item><el-form-item label="确认密码" prop="passwordConfirm">
              <el-input v-model="userRegisterInfo.passwordConfirm" type="password"></el-input>
            </el-form-item><el-form-item label="队伍名称"  prop="teamName">
              <el-input v-model="userRegisterInfo.teamName"></el-input>
            </el-form-item><el-form-item label="联系人姓名" prop="name">
              <el-input v-model="userRegisterInfo.name" type=""></el-input>
            </el-form-item><el-form-item label="电话" prop="phone">
              <el-input v-model="userRegisterInfo.phone" type=""></el-input>
            </el-form-item><el-form-item label="邮箱"  prop="email">
              <el-input v-model="userRegisterInfo.email"></el-input>
            </el-form-item><el-form-item label="单位" prop="institute">
              <el-input v-model="userRegisterInfo.institute" type=""></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="verificateCode">
              <div class="" style="">
                <el-input v-model="userRegisterInfo.verificateCode" type=""></el-input>
              </div>
              <div class="" style="" @click="fetchVerificateCode">
                <img :src="verificateCode" alt="verification" style="float: left;width: 90px;">
              </div>
            </el-form-item>
            <div style="text-align: center;">
              <el-button type="primary" @click="submitForm('userRegisterInfo')" :loading="loading">注册申请</el-button>
              <el-button @click="resetForm('userRegisterInfo')">重置</el-button>
            </div>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="忘记密码" name="pwdReset" style="text-align: left;">
          <el-form :inline="true" ref="pwdResetInfo" :model="pwdResetInfo" :rules="rules" label-width="100px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="pwdResetInfo.username"></el-input>
            </el-form-item><el-form-item label="联系人姓名" prop="name">
              <el-input v-model="pwdResetInfo.name"></el-input>
            </el-form-item><el-form-item label="电话" prop="phone">
              <el-input v-model="pwdResetInfo.phone"></el-input>
            </el-form-item><el-form-item label="邮箱" prop="email">
              <el-input v-model="pwdResetInfo.email"></el-input>
            </el-form-item><el-form-item label="密码" prop="password">
              <el-input type="password" v-model="pwdResetInfo.password"></el-input>
            </el-form-item><el-form-item label="确认密码" prop="passwordResetConfirm">
              <el-input type="password" v-model="pwdResetInfo.passwordResetConfirm"></el-input>
            </el-form-item><el-form-item label="验证码" prop="verificateCode">
              <div class="" style="">
                <el-input v-model="pwdResetInfo.verificateCode" type=""></el-input>
              </div>
              <div class="" style="" @click="fetchVerificateCode">
                <img :src="verificateCode" alt="verification" style="float: left;width: 90px;">
              </div>
            </el-form-item>
            <div style="text-align: center;">
              <el-button type="primary" @click="submitForm('pwdResetInfo')" :loading="loading">重置密码</el-button>
              <el-button @click="resetForm('pwdResetInfo')">清空</el-button>
            </div>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import store from '../store'
export default {
  data: function () {
    let validatePhone = (rule, value, callback) => {
      console.log(value)
      if (!value) {
        return callback(new Error('手机号码不能为空'))
      }
      setTimeout(() => {
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(value))) {
          callback(new Error('手机号码输入错误'))
        } else {
          callback()
        }
      }, 1000)
    }
    let validateEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      }
      setTimeout(() => {
        if (!(/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,10}\.[a-zA-Z0-9]{1,5}/.test(value))) {
          callback(new Error('邮箱地址不合法'))
        } else {
          callback()
        }
      }, 1000)
    }
    let validateResetFirstPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      }
      // const that = this
      setTimeout(() => {
        if (!(/(?=.*[a-z])(?=.*\d)(?=.*[#@!~%^&*_+-=])[a-z\d#@!~%^&*_+-=]{8,16}/i.test(value))) {
          callback(new Error('密码长度应在8-16位且包含至少包含字母,数字和特殊字符'))
        } else {
          callback()
        }
      }, 1000)
    }
    let validateResetPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('确认密码不能为空'))
      }
      const that = this
      setTimeout(() => {
        if (value !== that.pwdResetInfo.password) {
          callback(new Error('密码不一致'))
        } else {
          callback()
        }
      }, 1000)
    }
    let validateConfirmPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('重复密码不能为空'))
      }
      const that = this
      setTimeout(() => {
        if (value !== that.userRegisterInfo.password) {
          callback(new Error('密码不一致'))
        } else {
          callback()
        }
      }, 1000)
    }
    return {
      Logining: false,
      isAdmin: Number(localStorage.getItem('isAdmin')),
      isLogin: !!(localStorage.getItem('username')),
      loading: false,
      dialog_loading: false,
      verificateCode: require('assets/loading.gif'),
      navList: [
        { path: '/home', text: '首页' },
        { path: '/contest', text: '邀请赛介绍' },
        { path: '/expert', text: '大赛组织机构' },
        // { path: '/news', text: '新闻' },
        { path: '/previous', text: '往届回顾' },
        { path: '/protocol', text: '大赛协议' }
        // { path: '/help', text: '关于我们' }
      ],
      shouldLogin: false,
      username: localStorage.getItem('username'),
      dialogFormVisible: false,
      userLoginInfo: {
        username: '',
        loginPassword: '',
        verificateCode: ''
      },
      userRegisterInfo: {
        teamName: '',
        name: '',
        phone: '',
        email: '',
        institute: '',
        username: '',
        password: '',
        passwordConfirm: '',
        verificateCode: ''
      },
      pwdResetInfo: {
        username: '',
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordResetConfirm: '',
        verificateCode: ''
      },
      activeName: 'login',
      rules: {
        teamName: [
          { required: true, message: '队伍名称不能为空', trigger: 'blur' },
          { min: 2, max: 8, message: '队伍名称长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '姓名不能为空', trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: validatePhone, trigger: 'blur' }
        ],
        email: [
          { required: true, validator: validateEmail, trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validateResetFirstPassword, trigger: 'blur' }
        ],
        loginPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        passwordConfirm: [
          { required: true, validator: validateConfirmPassword, trigger: 'blur' }
        ],
        institute: [
          { required: true, message: '请输入工作单位', trigger: 'blur' }
        ],
        passwordResetConfirm: [
          { required: true, validator: validateResetPassword, trigger: 'blur' }
        ],
        verificateCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    activeName (name) {
      this.fetchVerificateCode()
    }
  },
  computed: {
    activeText () {
      return store.state.activeText
    },
    team_avatar () {
      return store.state.team_avatar
    }
  },
  methods: {
    toogleActive: function (text) {
      store.commit('changeTitle', text)
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (formName === 'userRegisterInfo') {
            this.confirmRegister()
          } else if (formName === 'pwdResetInfo') {
            this.postRestPwdToServer()
          }
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    resetForm: function (formName) {
      this.$refs[formName].resetFields()
    },
    postRestPwdToServer () {
      this.$http.post('user/resetPwd.do', this.pwdResetInfo)
        .then((response) => {
          if (response.body.success) {
            this.loading = false
            this.resetForm('pwdResetInfo')
            this.$message({
              type: 'success',
              message: response.body.msg
            })
          } else {
            this.fetchVerificateCode()
            this.$message({
              type: 'info',
              message: '信息认证错误，无法重置密码'
            })
          }
        })
    },
    handleLoginToServer: function () {
      this.dialog_loading = true
      this.$http.post('login.do', {
        username: this.userLoginInfo.username,
        password: this.userLoginInfo.loginPassword,
        verificateCode: this.userLoginInfo.verificateCode
      }).then((res) => {
        console.log(res.body)
        if (res.body.success) {
          localStorage.setItem('username', res.data.userInfo.teamName)
          localStorage.setItem('token', res.data.userInfo.token)
          res.data.userInfo.isAdmin ? localStorage.setItem('isAdmin', res.data.userInfo.isAdmin) : ''
          localStorage.setItem('team_avatar', res.data.userInfo.teamPictureUrl)
          this.isAdmin = res.data.userInfo.isAdmin
          this.isLogin = true
          this.username = res.data.userInfo.teamName
          store.commit('changeAvatar', res.data.userInfo.teamPictureUrl)
          this.dialog_loading = false
          this.dialogFormVisible = false
          this.Logining = false
          this.resetForm('userLoginInfo')
        } else {
          this.$message({
            showClose: true,
            message: res.body.msg,
            type: 'error'
          })
          this.fetchVerificateCode()
          this.dialog_loading = false
          this.Logining = false
        }
      })

      // this.isLogin = 1
      // utils.Cookie.set('username', 'test')
      // utils.Cookie.set('isAdmin', 1)
      // this.isAdmin = 1
      // this.username = 'test'
    },
    login: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.Logining = true
          let _this = this
          setTimeout(() => {
            _this.handleLoginToServer()
          }, 800)
        } else {
          console.log('login error')
          return false
        }
      })
    },
    logout: function () {
      localStorage.clear()
      this.isLogin = false
      this.isAdmin = false
      this.Logining = false
      this.team_avatar = ''
    },
    confirmRegister: function () {
      this.loading = true
      this.handleRegisterToServer()
    },
    handleRegisterToServer: function () {
      this.shouldLogin = true
      this.$http.post('register.do', this.userRegisterInfo)
        .then((response) => {
          this.loading = false
          if (response.body.success) {
            this.dialogFormVisible = false
            this.resetForm('userRegisterInfo')
            this.$alert('请尽快登陆账号完善团队信息，我们将在您提交完整的团队信息后进行审核，审核通过后我们将发送大赛参赛确认邮件邀请您参加本次比赛。', '注册成功', {
              confirmButtonText: '确定',
              close: () => {
                if (this.shouldLogin) {
                  this.dialogFormVisible = true
                  this.activeName = 'login'
                  this.shouldLogin = false
                }
              }
            })
          } else {
            this.fetchVerificateCode()
            this.$alert(response.body.msg, '注册失败', {
              confirmButtonText: '确定'
              // close: () => {
              //   this.dialogFormVisible = true
              //   this.activeName = 'register'
              // }
            })
          }
        })
    },
    goToMyInfo: function () {
      if (localStorage.getItem('isLogin')) {
        this.$message({
          message: '登录过期，请重新登录',
          type: 'warning'
        })
        this.logout()
      }
    },
    fetchVerificateCode () {
      this.$http.get('GetVertifyCodeImage.do')
        .then((res) => {
          this.verificateCode = URL.createObjectURL(res.body)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted: function () {
  }
}
</script>

<style lang="scss">
  ._container {
    width: 1280px;
    // padding-right: 15px;
    // padding-left: 15px;
    margin: 0 auto;
  }
  .my_btn {
    text-decoration: none !important;
    color: #99a9bf !important;
    outline: none !important;
    &:hover {
      color: #fff !important;
    }
  }
  .header_dialog {
    div.el-dialog.el-dialog-- {
      max-width: 600px;
    }
  }
  .el-dropdown-menu__item {
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }

  .btn_register {
    float: left;
    list-style: none;
    height: 100%;
    line-height: 60px;
  }
  .nav_list {
    display: inline;
    list-style: none;
    li {
      float: left;
      a {
        display: inline-block;
        width: 100%;
        text-decoration: none;
      }
    }
  }


  .nav {
    font-size: 18px;
    // border-bottom: 1px solid #eee;
    background: #324057;
    // position: fixed;
    // width: 100%;
    min-width: 1280px;
    .img_logo {
      width: 100px;
      height: 60px;
      float: left;
    }
    .nav_list {
      float: left;
      font-weight: 500;
      margin-left: 100px;
      li {
        height: 50px;
        line-height: 61px;
        a {
          color: #99a9bf;
          text-decoration: none;
          padding: 0 20px;
        }
      }
      .active {
        a {
          color: #fff;
        }
      }
    }

    .login_list {
      float: right;
      line-height:42px;
      margin-bottom: 0;
      font-size: 16px;
      .login {
        li {
          width: 60px;
          height: 40px;
          margin-top: 10px;
          a {
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
