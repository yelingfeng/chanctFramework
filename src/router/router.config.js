import home from '../pages/home'
import layout from '../pages/testApp/layout-2.vue'

const menu = [
    {
        path: '/home',
        icon: 'home',
        name: 'home',
        label: 'home',
        component: home
    },
    {
        path: '/layout',
        icon: 'dashboard',
        name: 'layout',
        label: 'layout',
        component: layout,
        isShowSubMenu: false
    }
]
export { menu }
