import Vue from 'vue'
import Vuex from 'vuex'
// 声明使用vuex
Vue.use(Vuex)
// 声明变量
const state = {
    title:"Movie",
    color:'rgb(33,150,243)',
    detailId:''
}
const mutations = {
    routerLinks(state,params){
        state.title = params.title;
        state.color = params.color;
    }
}
// 把要使用的变量抛出别人即可使用
export default new Vuex.Store({
    state,
    mutations
})