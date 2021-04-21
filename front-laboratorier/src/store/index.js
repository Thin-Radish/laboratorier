import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:null,
    accouts:null,
    materials:null
  },
  mutations: {
    commitUserInfo(state,paylod){
      state.userInfo = paylod;
    },
    commitAccouts(state,paylod){
      state.accouts = paylod;
    },
    commitMaterials(state,paylod){
      state.materials = paylod;
    },

  },
  actions: {
  },
  modules: {
  }
})
