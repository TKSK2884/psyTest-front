import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import OAuthView from "../views/OAuthView.vue";
import JoinView from "../views/JoinView.vue";
import TestView from "../views/TestView.vue";
import TestResultHistoryView from "../views/TestResultHistoryView.vue";
import PathFinderView from "../views/PathFinderView.vue";
import SaveResultView from "../views/SaveResultView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/join",
        name: "join",
        component: JoinView,
    },
    {
        path: "/oauth/kakao",
        name: "oauth",
        component: OAuthView,
    },
    {
        path: "/test",
        name: "test",
        component: TestView,
    },
    {
        path: "/test/result/history",
        name: "history",
        component: TestResultHistoryView,
    },
    {
        path: "/path/finder",
        name: "path",
        component: PathFinderView,
    },
    {
        path: "/test/save/result",
        name: "save",
        component: SaveResultView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
