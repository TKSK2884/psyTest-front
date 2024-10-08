import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        progressToken: undefined,
        accesToken: undefined,
        userId: undefined,
        selectedTestName: undefined,
        url: undefined,
        pageTitle: "GptMind",
    },
    getters: {
        getProgressToken(state) {
            return state.progressToken;
        },
        getAccessToken(state) {
            return state.accesToken;
        },
    },
    mutations: {
        setProgressToken(state, token) {
            state.progressToken = token;
        },
        setAccessToken(state, token) {
            state.accesToken = token;
        },
        setUserId(state, id) {
            state.userId = id;
        },
        setSelectedTestName(state, test) {
            state.selectedTestName = test;
        },
        setUrl(state, url) {
            state.url = url;
        },
        setPageTitle(state, newTitle) {
            state.pageTitle = newTitle;
        },
    },
    actions: {},
    modules: {},
});
