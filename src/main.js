// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './vuex'
// import router from './router';
// import { sync } from 'vuex-router-sync'
import axios from 'axios';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

Vue.use(ElementUI)

import 'font-awesome/css/font-awesome.css'
window.axios = axios;

// sync(store, router)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    template: '<App/>',
    components: { App }
})
