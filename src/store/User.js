import { userApi } from "@/api/index.js";

export default {
    namespaced: true,
    state: {
        loading: false,
        data: null,
    },
    getters: {
        status(state) {
            if (state.loading) {
                return 'loading';
            } else if (state.data) {
                return 'login';
            } else {
                return 'unlogin';
            }
        }
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async Login(ctx, payload) {
            ctx.commit('setLoading', true);
            const resp = await userApi.login(payload.loginId,payload.loginPwd);
            ctx.commit('setData', resp);
            ctx.commit('setLoading',false);
            return resp;
        },
        async whoAmi(ctx) {
            ctx.commit('setLoading', true);
            const resp = await userApi.whoAmi();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
            return resp;
        },
        async loginOut(ctx) {
            ctx.commit('setLoading', true);
            await userApi.loginOut();
            ctx.commit('setData', null);
            ctx.commit('setLoading', false);
        }
    },
}
