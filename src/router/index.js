import Vue from 'vue'
import Router from 'vue-router'

import myHome from 'components/content/Home'
import myContest from 'components/content/Contest'
import myNews from 'components/content/News'
import myHelp from 'components/content/Help'
import myExpert from 'components/content/expert'
import myLogin from 'components/login/index'
import myContestDetails from 'components/content/ContestTemplate'
import myUserInfo from 'components/content/user/Index'
import myVerify from 'components/content/Verify'

import myProfile from 'components/content/user/Profile'
import myProject from 'components/content/user/Project'
import myResult from 'components/content/user/Result'

import Cookie from '../../utils/util'

Vue.use(Router)

const userRoutes = [
  { path: 'profile', component: myProfile },
  { path: 'project', component: myProject },
  { path: 'result', component: myResult }
]

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
      path: '/user',
      name: 'user',
      component: myUserInfo,
      children: userRoutes,
      beforeEnter: function (to, from, next) {
        if (Cookie.get('username')) {
          next()
        } else {
          next('/home')
        }
      }
    },
    {
      path: '/verify',
      name: 'verify',
      component: myVerify,
      beforeEnter: function (to, from, next) {
        if (Cookie.get('isAdmin')) {
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
