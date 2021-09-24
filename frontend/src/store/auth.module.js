// @ is equal to src/
import ApiService from "@/common/api.service";


import {
    LOGIN,
    LOGOUT
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

    }



};

const mutations = {

    [SET_AUTH](state, user) {
        state.isAuthenticated = true;
        state.user = user;
    },
    [PURGE_AUTH](state) {
        state.isAuthenticated = false;
        state.user = {};
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
