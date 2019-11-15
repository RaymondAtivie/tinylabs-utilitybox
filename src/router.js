import Vue from 'vue'
import Router from 'vue-router';
import Onboard from './views/Onboard.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'onboard',
            component: Onboard
        },
    ]
});