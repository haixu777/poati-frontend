import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeText: '首页',
    team_avatar: localStorage.getItem('team_avatar')
  },
  actions: {
    changeTitle (state, text) {
      state.activeText = text
    },
    changeAvatar (state, url) {
      state.team_avatar = url
    }
  },
  mutations: {
    changeTitle (state, text) {
      state.activeText = text
    },
    changeAvatar (state, url) {
      state.team_avatar = url
    }
  },
  getters: {
    activeText: function (state) {
      return state.activeText
    },
    team_avatar: function (state) {
      return state.team_avatar
    }
  }
})

export default store
