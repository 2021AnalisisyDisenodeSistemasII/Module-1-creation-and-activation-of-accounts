import ApiService from "@/common/api.service";
import {
    GET_CLIENT,
    PURGUE_CLIENT,
    CREATE_ACCOUNT
} from "./actions.type";
import {
    SET_CLIENT,
    SET_ERROR,
    RESET_CLIENT
} from "./mutations.type";

const actions = {

    [GET_CLIENT](context, credentials) {
        return ApiService.get("client", credentials)
            .then((data) => {
                if (!data.data.msg) { context.commit(SET_CLIENT, data.data); }
                else { context.commit(SET_ERROR, data.data.msg); }

            })
    },
    [PURGUE_CLIENT](context) {
        context.commit(RESET_CLIENT)

    },
    [CREATE_ACCOUNT](context, credentials) {
        return ApiService.post("accounts", credentials)
            .then((data) => {
                return JSON.parse(JSON.stringify(data))


            })
    }

};
const mutations = {
    [SET_CLIENT](state, client) {
        state.client = client
        state.error = null
    },
    [SET_ERROR](state, error) {
        state.error = error
        state.client = null
    },
    [RESET_CLIENT](state) {
        state.client = null
        state.error = null
    }


};
const state = {
    client: null,
    error: null
};
const getters = {
    currentClient(state) {
        return state.client
    }
};

export default {
    actions,
    mutations,
    state,
    getters
}