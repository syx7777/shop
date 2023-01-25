import Vue from 'vue'
import Vuex from 'vuex'

import {reqGetItemList} from '@/api'

Vue.use(Vuex)

const state={
  itemList1:[],
  username:'',
  password:'',
};
const mutations={
  GETITEMLIST1(state,itemList1){
    state.itemList1=itemList1
  },
  UPDATEDUSERNAME(state,username){
    state.username=username
  },
  UPDATEDPASSWORD(state,password){
    state.password=password
  }
};
const actions={
  async getItemList({commit}){
    let result = await reqGetItemList();
    if(result.code==200){
      //提交mutation
      commit('GETITEMLIST1',result.data);
    }
  }
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
})
