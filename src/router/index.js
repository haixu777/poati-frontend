import Vue from 'vue'
import Router from 'vue-router'

const myHome = r => require.ensure([], () => r(require('components/content/Home')), 'home')
const myContest = r => require.ensure([], () => r(require('components/content/Contest')), 'contest')
const myNews = r => require.ensure([], () => r(require('components/content/News')), 'news')
const myHelp = r => require.ensure([], () => r(require('components/content/Help')), 'help')
const myExpert = r => require.ensure([], () => r(require('components/content/expert')), 'expert')
const myPrevious = r => require.ensure([], () => r(require('components/content/previous')), 'previous')
const mySponsor = r => require.ensure([], () => r(require('components/content/Sponsor')), 'sponsor')
const myLogin = r => require.ensure([], () => r(require('components/login/index')), 'login')
const myContestDetails = r => require.ensure([], () => r(require('components/content/ContestTemplate')), 'contestDetails')
const myNewsDetails = r => require.ensure([], () => r(require('components/content/NewsTemplate')), 'newsTemplate')
const myUserInfo = r => require.ensure([], () => r(require('components/content/user/Index')), 'user')
const myVerify = r => require.ensure([], () => r(require('components/content/Verify')), 'verify')

const myContestWbfl = r => require.ensure([], () => r(require('components/content/contest/2017/Wbfl')), 'Wbfl')
const myContestGjccq = r => require.ensure([], () => r(require('components/content/contest/2017/Gjccq')), 'Gjccq')
const myContestSjybfx = r => require.ensure([], () => r(require('components/content/contest/2017/Sjybfx')), 'Sjybfx')
const myContestSjgjyssb = r => require.ensure([], () => r(require('components/content/contest/2017/Sjgjyssb')), 'Sjgjyssb')
const myContestSjgxcq = r => require.ensure([], () => r(require('components/content/contest/2017/Sjgxcq')), 'Sjgxcq')
const myContestYhhx = r => require.ensure([], () => r(require('components/content/contest/2017/Yhhx')), 'Yhhx')
const myContestSjgxyc = r => require.ensure([], () => r(require('components/content/contest/2017/Sjgxyc')), 'Sjgxyc')

const myContestRlsb = r => require.ensure([], () => r(require('components/content/contest/2016/Rlsb')), 'Rlsb')
const myContestShrsb = r => require.ensure([], () => r(require('components/content/contest/2016/Shrsb')), 'Shrsb')
const myContestSpkdjc = r => require.ensure([], () => r(require('components/content/contest/2016/Spkbjc')), 'Spkbjc')
const myContestSpwbgjcjc = r => require.ensure([], () => r(require('components/content/contest/2016/Spwbgjcjc')), 'Spwbgjcjc')
const myContestTdspsb = r => require.ensure([], () => r(require('components/content/contest/2016/Tdspsb')), 'Tdspsb')
const myContestYpdb = r => require.ensure([], () => r(require('components/content/contest/2016/Ypdb')), 'Ypdb')
const myContestYygjcjc = r => require.ensure([], () => r(require('components/content/contest/2016/Yygjcjc')), 'Yygjcjc')

const myProfile = r => require.ensure([], () => r(require('components/content/user/Profile')), 'profile')
const myProject = r => require.ensure([], () => r(require('components/content/user/Project')), 'project')
const myResult = r => require.ensure([], () => r(require('components/content/user/Result')), 'result')

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
      path: '/sponsor',
      name: 'sponsor',
      component: mySponsor
    },
    {
      path: '/contest/2017',
      name: 'details2017',
      component: myContestDetails,
      children: [
        { path: 'wbfl', component: myContestWbfl },
        { path: 'gjccq', component: myContestGjccq },
        { path: 'sjybfx', component: myContestSjybfx },
        { path: 'Sjgjyssb', component: myContestSjgjyssb },
        { path: 'Sjgxcq', component: myContestSjgxcq },
        { path: 'yhhx', component: myContestYhhx },
        { path: 'Sjgxyc', component: myContestSjgxyc }
      ]
    },
    {
      path: '/contest/2016',
      name: 'details2016',
      component: myContestDetails,
      children: [
        { path: 'rlsb', component: myContestRlsb },
        { path: 'shrsb', component: myContestShrsb },
        { path: 'spkbjc', component: myContestSpkdjc },
        { path: 'spwbgjcjc', component: myContestSpwbgjcjc },
        { path: 'tdspsb', component: myContestTdspsb },
        { path: 'ypdb', component: myContestYpdb },
        { path: 'yygjcjc', component: myContestYygjcjc }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: myNews
    },
    {
      path: '/news/details/*',
      name: 'news_details',
      component: myNewsDetails
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
      path: '/previous',
      name: 'previous',
      component: myPrevious
    },
    {
      path: '/user',
      name: 'user',
      component: myUserInfo,
      children: userRoutes,
      beforeEnter: function (to, from, next) {
        if (localStorage.getItem('username')) {
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
        if (localStorage.getItem('isAdmin')) {
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
