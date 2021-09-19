export default {
    namespaced: true,
    state: {
        loading: false,
        data: null,
    },
    mutations: {
        setLoading(state,payload) {
            state.loading = payload;
        },
        setData(state,payload) {
            state.data = payload;
        }
    },
    actions: {
        async Login(ctx,payload) {
            ctx.commit('setLoading',false);
            const resp = await userApi.login(payload.userid,payload.userpwd);
            ctx.commit('setData',resp);
            ctx.commit('setLoading',true);
            return resp;
        },
        async whoAmi(ctx) {
            ctx.commit('setLoading',false);
            const resp = await userApi.whoAmi();
            ctx.commit('setData',resp);
            ctx.commit('setLoading',true);
            return resp;
        },
        async loginOut(ctx) {
            ctx.commit('setLoading',false);
            await userApi.loginOut();
            ctx.commit('setData',null);
            ctx.commit('setLoading',true);
        }
    }, 
}
