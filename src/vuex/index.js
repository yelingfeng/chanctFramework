/**
 * Created by ylf on 2017/4/10.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import { global } from './modules';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        global: {
            namespaced: true,
            ...global
        }
    },
    strict: debug,
    plugins: debug ? [] : []
});
