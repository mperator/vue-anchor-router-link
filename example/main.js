import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
// Use VueScrollTo for animation.
// import VueScrollTo from "vue-scrollto";

Vue.config.productionTip = false

import Page1 from "./components/Page1"
import Page2 from "./components/Page2"

// Use VueScrollTo for animation.
// Vue.use(VueScrollTo);
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/page1',
            name: 'Page1',
            component: Page1,
        },
        {
            path: '/page2',
            name: 'Page2',
            component: Page2,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            window.location.href = to.hash;
            // Use VueScrollTo for animation.
            // VueScrollTo.scrollTo(to.hash, 700);
            return { selector: to.hash }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 }
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
