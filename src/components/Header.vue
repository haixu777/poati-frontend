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
        <li><a href="#">登录</a></li>
        <li class="btn_register"><a href="#">注册</a></li>
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
      ]
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
    console.log(111)
  }
}
</script>

<style lang="scss">
  ul {
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
      li {
        width: 60px;
        height: 40px;
        margin-top: 10px;
        a {
          text-decoration: none;
        }
      }
      :nth-child(2) {
        border: 1px solid #000;
        border-radius: 10px;
        &:hover {
          background: red;
        }
      }
    }
  }
</style>
