<template lang="html">
  <div class="header container">
    <div class="nav">
      <img src="" alt="logo" class="img_logo">
      <ul class="nav_list">
          <li v-for="item in navList" :class="item.text==activeText?'active':''" @click="toogleActive(item.text)">
            <router-link :to="item.path">{{ item.text }}</router-link>
          </li>
      </ul>
      <ul class="login_list">
        <li class="btn_register" v-if="!isLogin">
          <div class="login">
            <button type="button" name="button" class="btn btn-sm btn-success" @click="dialogFormVisible=true">登录</button>
          </div>
        </li>
        <li class="btn_register" v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ username }}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link :to="isAdmin?'/verify':'/user'" style="text-decoration: none;" @click.native="goToMyInfo()">
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

    <el-dialog title="" v-model="dialogFormVisible" size="">
      <el-tabs v-model="activeName" @tab-click="">
        <el-tab-pane label="用户登录" name="login">
          <el-form ref="userLoginInfo" :model="userLoginInfo" :rules="rules" label-width="80px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="userLoginInfo.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="userLoginInfo.password" type="password" @keyup.enter.native="login('userLoginInfo')" ></el-input>
            </el-form-item>
            <el-form-item style="">
              <el-button type="primary" @click="login('userLoginInfo')">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="用户注册" name="register">
          <el-form :inline="true" ref="userRegisterInfo" :model="userRegisterInfo" :rules="rules" label-width="100px">
            <el-form-item label="队伍名称"  prop="teamName">
              <el-input v-model="userRegisterInfo.teamName"></el-input>
            </el-form-item><el-form-item label="联系人姓名" prop="name">
              <el-input v-model="userRegisterInfo.name" type=""></el-input>
            </el-form-item><el-form-item label="电话" prop="phone">
              <el-input v-model="userRegisterInfo.phone" type=""></el-input>
            </el-form-item><el-form-item label="邮箱"  prop="email">
              <el-input v-model="userRegisterInfo.email"></el-input>
            </el-form-item><el-form-item label="单位" prop="unit">
              <el-input v-model="userRegisterInfo.unit" type=""></el-input>
            </el-form-item><el-form-item label="用户名" prop="username">
              <el-input v-model="userRegisterInfo.username" type=""></el-input>
            </el-form-item><el-form-item label="密码"  prop="password">
              <el-input v-model="userRegisterInfo.password" type="password"></el-input>
            </el-form-item><el-form-item label="确认密码" prop="passwordConfirm">
              <el-input v-model="userRegisterInfo.passwordConfirm" type="password"></el-input>
            </el-form-item><el-form-item label="IP地址" prop="ipAddress">
              <el-input v-model="userRegisterInfo.ipAddress" type=""></el-input>
            </el-form-item>
            <el-form-item label="硬件资源要求" prop="info">
              <el-input v-model="userRegisterInfo.info" type="textarea" autosize></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('userRegisterInfo')">注册申请</el-button>
              <el-button @click="resetForm('userRegisterInfo')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
</template>

<script>
import store from '../store'
import Cookie from '../../utils/util'

export default {
  data: function () {
    let validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('电话不能为空'))
      }
      setTimeout(() => {
        if (!(/^1(3|4|5|7|8)\d{9}$/.test(value))) {
          callback(new Error('不是完整的11位手机号或者正确的手机号前七位'))
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
        if (!(/[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/.test(value))) {
          callback(new Error('邮箱地址不合法'))
        } else {
          callback()
        }
      }, 1000)
    }
    let validateConfirmPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('重复密码不能为空'))
      }
      setTimeout(() => {
        if (value !== this.userRegisterInfo.password) {
          callback(new Error('密码不一致'))
        } else {
          callback()
        }
      }, 1000)
    }
    return {
      isAdmin: Cookie.get('isAdmin'),
      isLogin: !!(Cookie.get('username')),
      navList: [
        { path: '/home', text: '首页' },
        { path: '/contest', text: '竞赛' },
        { path: '/news', text: '新闻' },
        { path: '/expert', text: '专家' },
        { path: '/help', text: '帮助' }
      ],
      username: Cookie.get('username'),
      dialogFormVisible: false,
      userLoginInfo: {
        username: '',
        password: ''
      },
      userRegisterInfo: {
        teamName: '',
        name: '',
        phone: '',
        email: '',
        unit: '',
        ipAddress: '',
        username: '',
        password: '',
        passwordConfirm: '',
        info: ''
      },
      activeName: 'login',
      rules: {
        teamName: [
          { required: true, message: '队伍名称不能为空', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '姓名不能为空', trigger: 'change' }
        ],
        phone: [
          { required: true, validator: validatePhone, trigger: 'change' }
        ],
        email: [
          { required: true, validator: validateEmail, trigger: 'change' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        passwordConfirm: [
          { required: true, validator: validateConfirmPassword, message: '两次密码不一致', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    activeText () {
      return store.state.activeText
    }
  },
  methods: {
    toogleActive: function (text) {
      store.commit('changeTitle', text)
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.confirmRegister()
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    resetForm: function (formName) {
      this.$refs[formName].resetFields()
    },
    handleLoginToServer: function () {
      this.$http.post('/login', {
        username: this.userLoginInfo.username,
        password: this.userLoginInfo.password
      }).then((res) => {
        Cookie.set('username', res.data.username)
        Cookie.set('isAdmin', false)
        this.isAdmin = false
        this.isLogin = true
        this.username = res.data.username
      })
    },
    login: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('login~')
          this.dialogFormVisible = false
          this.handleLoginToServer()
        } else {
          console.log('login error')
          return false
        }
      })
    },
    logout: function () {
      Cookie.clear()
      this.isLogin = false
      this.isAdmin = false
    },
    confirmRegister: function () {
      this.$confirm('注册信息提交成功后我们将尽快审核您的信息，并通过邮件告知您结果。是否确认提交？', '提示', {
        confirmButtonText: '提交',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('提交成功')
        this.dialogFormVisible = false
        this.resetForm('userRegisterInfo')
      }).catch(() => {
        console.log('取消')
      })
    },
    goToMyInfo: function () {
      if (Cookie.get('isLogin')) {
        this.$message({
          message: '登录过期，请重新登录',
          type: 'warning'
        })
        this.logout()
      }
    }
  },
  mounted: function () {
  }
}
</script>

<style lang="scss">
  .btn_register {
    float: left;
    list-style: none;
    margin-top: 8px;
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
    font-size: 20px;
    border-bottom: 1px solid #eee;
    .img_logo {
      width: 50px;
      height: 50px;
      float: left;
    }
    .nav_list {
      float: left;
      font-weight: 500;
      margin-left: 100px;
      li {
        width: 80px;
        height: 50px;
        line-height: 61px;
        a {
          text-decoration: none;
        }
      }
      .active {
        a {
          color: red;
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
