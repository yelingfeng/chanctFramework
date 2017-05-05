/**
 * Created by ylf on 2017/4/11.
 */
import Vue from 'vue'
import Router from 'vue-router'
import {menu} from './router.config'
Vue.use(Router)

let routes = menu.map(function(item) {
    return item
})

routes.push({
    path: '*',
    redirect: '/home'
})

const router = new Router({
    mode: 'history',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    linkActiveClass: 'active',
    routes
})

export default router
