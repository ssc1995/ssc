import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        name:"芙蓉",
        arr:[{name:'大连',city:'山东'},{name:'武汉',city:'湖北'},{name:'长沙',city:'湖南'}],
        numb:0
    },
    actions:{
        // changName({commit}) {
        //     commit('changeName_M')
        // }
        
    },
    mutations:{
        changName(state,payload) {  
            state.name = '出淤泥而不妖';
            state.arr.reverse();  //list 翻转
            state.numb = payload;
        }
    }
})

export default store;