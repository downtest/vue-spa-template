import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage";
import User from "../components/User";
import Counter from "../components/Counter";

Vue.use(VueRouter);

const NotFound = { template: '<div>404</div>' }

const routes = [
    { path: '*', component: NotFound },
    { path: '/', component: MainPage, meta: {title: 'Main page'}},
    { path: '/user', component: User, meta: {title: 'User'}},
    { path: '/counter', component: Counter, meta: {title: 'Count me'} },
]

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'link__active',
    routes, // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    document.title =  to.meta.title;
    next()
})


export default router;
