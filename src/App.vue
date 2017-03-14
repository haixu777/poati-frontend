<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <el-alert
      v-if="firstTime"
      title="浏览器兼容信息：IE9+，Chrome，Safari"
      type="success"
      @close="info">
    </el-alert>
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

<style>
#app {
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1170px;
}
</style>
