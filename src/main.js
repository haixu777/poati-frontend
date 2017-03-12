// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import config from '../config'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import ElementUI from 'element-ui'
// import VueQuillEditor from 'vue-quill-editor'

import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResource)
Vue.use(ElementUI)
// Vue.use(VueQuillEditor)

// console.log(config)
// Vue.http.options.root = process.env.NODE_ENV === 'development' ? config.dev.env.interfaceUrl : config.build.env.interfaceUrl
if (process.env.NODE_ENV === 'development') {
  Vue.http.options.root = config.dev.env.interfaceUrl
} else {
  Vue.http.options.root = (config.build.env.interfaceUrl).replace(/"/g, '')
}

// http请求拦截器 在所有请求头上加入jwt-token以进行与服务端的认证
Vue.http.interceptors.push((request, next) => {
  const jwtToken = localStorage.getItem('token')
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
