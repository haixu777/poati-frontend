import Vue from 'vue'
import Router from 'vue-router'

import myHome from 'components/content/Home'
import myContest from 'components/content/Contest'
import myNews from 'components/content/News'
import myHelp from 'components/content/Help'
import myExpert from 'components/content/expert'

Vue.use(Router)

export default new Router({
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
      path: '*',
      redirect: '/home'
    }
  ]
})
