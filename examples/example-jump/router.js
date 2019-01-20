import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import VueScrollTo from "vue-scrollto"; // Use VueScrollTo for animation.

Vue.use(Router)
Vue.use(VueScrollTo);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            // Use for direct jump.
            window.location.href = to.hash;
            // Use VueScrollTo for animation.
            //VueScrollTo.scrollTo(to.hash, 700);
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
})
