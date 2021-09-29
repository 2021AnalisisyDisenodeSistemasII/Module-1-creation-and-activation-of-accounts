
// @ is equal to src/
import ApiService from "@/common/api.service";
import SessionService from "../common/session.service";
import {
    LOGIN,
    LOGOUT,
    CHECK_AUTH
} from "./actions.type";
import {
    SET_AUTH,
    PURGE_AUTH
} from "./mutations.type";



const actions = {
    [LOGIN](context, credentials) {
        return ApiService.post("login", credentials)
            .then((data) => {
                context.commit(SET_AUTH, data.data);
            })

    },
    [LOGOUT](context) {
        return ApiService.post("login", { data: {} })
            .then(() => {
                context.commit(PURGE_AUTH);
            })

    },
    [CHECK_AUTH](context) {
      if (SessionService.getUser()) {
        return ApiService.get("login/current")
          .then(({ data }) => {
            context.commit(SET_AUTH, data);
          })
          
      } else {
        context.commit(PURGE_AUTH);
      }
    }



};

const mutations = {

    [SET_AUTH](state, user) {
        state.isAuthenticated = true;
        state.user = user;
        SessionService.saveUser(user);
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
        SessionService.destroyUser()
    }
};

const state = {
    user: {},
    isAuthenticated: false
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
