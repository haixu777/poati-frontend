import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeText: '首页'
  },
  actions: {
    changeTitle (state, text) {
      state.activeText = text
    }
  },
  mutations: {
    changeTitle (state, text) {
      state.activeText = text
    }
  },
  getters: {
    activeText: function (state) {
      return state.activeText
    }
  }
})

export default store
