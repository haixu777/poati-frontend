<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <my-header></my-header>
    <my-content></my-content>
    <my-footer></my-footer>
  </div>
</template>

<script>

import myHeader from 'components/Header'
import myContent from 'components/Content'
import myFooter from 'components/Footer'

export default {
  name: 'app',
  data: function () {
    return {
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
    }
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
