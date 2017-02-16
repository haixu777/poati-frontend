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
            <router-link :to="'/login'">
              <button type="button" name="button" class="btn btn-sm btn-success" @click="toogleActive('')">登录</button>
            </router-link>
          </div>
        </li>
        <li class="btn_register" v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ username }}<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的竞赛</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  data: function () {
    return {
      navList: [
        { path: '/home', text: '首页' },
        { path: '/contest', text: '竞赛' },
        { path: '/news', text: '新闻' },
        { path: '/expert', text: '专家' },
        { path: '/help', text: '帮助' }
      ],
      isLogin: true,
      username: 'username_test'
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
