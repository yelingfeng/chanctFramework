import home from 'pages/home'
import bizA from 'pages/bizA'
import bizApageA from 'pages/bizA/bizA-pageA/pageA'
import bizApageB from 'pages/bizA/bizA-pageB/pageB'
import bizB from 'pages/bizB'

const menu = [
    {
        path: '/home',
        icon: 'home',
        name: 'home',
        label: 'home',
        component: home
    },
    {
        path: '/bizA',
        icon: 'dashboard',
        name: 'bizA',
        label: 'bizA',
        component: bizA
    },
    {
        path: '/bizA/pageA',
        name: 'pageA',
        label: 'pageA',
        component: bizApageA
    },
    {
        path: '/bizA/pageB',
        name: 'pageB',
        label: 'pageB',
        component: bizApageB
    },
    {
        path: '/bizB',
        icon: 'laptop',
        name: 'bizB',
        label: 'bizB',
        component: bizB,
        isShowSubMenu: false
    }
]
export { menu }
