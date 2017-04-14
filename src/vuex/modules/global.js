/**
 * Created by ylf on 2017/4/10.
 */
import { GLOBAL } from '../constants'
import { ajax } from 'common'
/**
 * 初始化数据
 */
const state = {
    // 菜单数据
    menuData : []
}

/**
 * 用于更新 view 的 getters
 */
const getters = {
    getMenus: state => state.menuData
}

/**
 * commit 同步突变
 */
const mutations = {
    [GLOBAL.SAVE_MENU_DATA](state, data) {
        state.menuData = data;
    }
}

/**
 * dispatch 异步改变
 */
const actions = {
    loadMenuData(store) {
        ajax.get('/static/mock/menuData.json').then(res => {
            if (res.data) {
                store.commit(GLOBAL.SAVE_MENU_DATA, res.data)
            }
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
