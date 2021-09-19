import Vue from 'vue'
import Vuex from 'vuex'

import User from "./User";
import clickCount from "./clickCount";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User,
    clickCount,
  },
  strict: true,
})
