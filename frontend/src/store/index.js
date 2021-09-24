import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth.module'
import sucursal from './sucursal.module'
import account from './account.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    sucursal,
    account
  }

})
