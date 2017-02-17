import Vue from 'vue'
import Router from 'vue-router'

import myHome from 'components/content/Home'
import myContest from 'components/content/Contest'
import myNews from 'components/content/News'
import myHelp from 'components/content/Help'
import myExpert from 'components/content/expert'
import myLogin from 'components/login/index'
import myContestDetails from 'components/content/ContestTemplate'
import myUserInfo from 'components/content/UserInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: myHome
    },
    {
      path: '/contest',
      name: 'contest',
      component: myContest
    },
    {
      path: '/contest/*',
      name: 'details',
      component: myContestDetails
    },
    {
      path: '/news',
      name: 'news',
      component: myNews
    },
    {
      path: '/expert',
      name: 'expert',
      component: myExpert
    },
    {
      path: '/help',
      name: 'help',
      component: myHelp
    },
    {
      path: '/login',
      name: 'login',
      component: myLogin
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: myUserInfo,
      beforeEnter: function (to, from, next) {
        if (localStorage.getItem('isLogin')) {
          next()
        } else {
          next('/home')
        }
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
