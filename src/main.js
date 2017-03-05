// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-swipe/dist/vue-swipe.css'

const utils = require('../utils/util')

Vue.use(VueResource)
Vue.use(ElementUI)

// http请求拦截器 在所有请求头上加入jwt-token以进行与服务端的认证
Vue.http.interceptors.push((request, next) => {
  const jwtToken = utils.Cookie.get('token')
  if (jwtToken) {
    request.headers.set('token', jwtToken)
  }
  next((response) => {
    return response
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
