import ApiService from "@/common/api.service";

import {
    GET_SUCURSALS,
    GET_CASHIERS
} from "./actions.type";

import {
    SET_SUCURSALS,
    SET_CASHIERS
} from "./mutations.type";

const actions = {
    [GET_SUCURSALS](context) {
        return ApiService.get("sucursals")
            .then(({ data }) => {
                context.commit(SET_SUCURSALS, data.sucursals);

                return JSON.parse(JSON.stringify(data.sucursals))
            })

    },
    [GET_CASHIERS](context, sucursal_id) {
        return ApiService.get("cashiers", sucursal_id)
            .then(({ data }) => {
                context.commit(SET_CASHIERS, data.cashiers);
                return JSON.parse(JSON.stringify(data.cashiers))
            })

    }
};
const mutations = {
    [SET_SUCURSALS](state, sucursals) {
        state.sucursals = sucursals;
    },
    [SET_CASHIERS](state, cashiers) {
        state.cashiers = cashiers;
    }
};
const state = {
    sucursals: [],
    cashiers: []
};
const getters = {};

export default {
    actions,
    mutations,
    state,
    getters
};
