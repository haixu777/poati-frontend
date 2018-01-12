<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <el-alert
      v-if="firstTime"
      style="min-width:1280px;"
      title="浏览器兼容信息：IE9+，Chrome，Safari"
      type="success"
      @close="info">
    </el-alert>
    <el-tooltip class="wechat" effect="dark" placement="bottom" v-if="false">
      <div slot="content">
        <div class="footer-popover-title" style="border-bottom: 1px solid #d1dbe5; text-align: center;">网络舆情</div>
        <img src="./assets/QR_code.jpg" alt="qr_code" style="width: 90px; height: 90px;">
      </div>
      <img src="./assets/wechat.png" alt="wechat" class="wechat_fixed_logo">
    </el-tooltip>
    <my-header></my-header>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script>

// import myHeader from 'components/Header'
// import myContent from 'components/Content'
// import myFooter from 'components/Footer'
const myHeader = require('components/Header')
const myContent = require('components/content')
const myFooter = require('components/Footer')

export default {
  name: 'app',
  data: function () {
    return {
      firstTime: localStorage.getItem('firstTime') === null
    }
  },
  components: {
    myHeader,
    myContent,
    myFooter
  },
  methods: {
    backToTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    info () {
      window.localStorage.setItem('firstTime', 1)
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // min-width: 1172px;
}
.wechat {
  position: fixed;
  top: 50%;
  left: 3%;
  margin-top: -25px;
}
.wechat_fixed_logo {
  width: 50px;
  height: 50px;
}
</style>
