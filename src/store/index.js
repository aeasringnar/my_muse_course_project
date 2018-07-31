import Vue from 'vue'
import vuex from 'vuex'
// import Cookies from 'js-cookie'
import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/user'

Vue.use(vuex);

// 设置token的相关信息
// const TokenKey = 'BootstrapVue-Token'
//
// function getToken() {
//   return Cookies.get(TokenKey)
// }
//
// function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }
//
// function removeToken() {
//   return Cookies.remove(TokenKey)
// }
//
// export function test() {
//   return '987654'
// }

//state为访问状态对象 数字常量等
const state = {
  x:5,
  token: getToken(),
  nickname: ''
};
//访问触发状态mutation是同步的
//actions是异步的
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, nickname) => {
    state.nickname = nickname
  }
};
const actions = {
  Login({ commit }, userInfo) {
    const username = userInfo.username.trim()
    return new Promise((resolve, reject) => {
      login(username, userInfo.password).then(response => {
        const data = response.data
        setToken(data.token)
        commit('SET_TOKEN', data.token)
        resolve()
      }).catch(error => {
        console.log()
        reject(error)
      })
    })
  },
  GetInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const data = response.data
        console.log(data)
        commit('SET_NAME', data.nickname)
        resolve()
      }).catch(error => {
        console.log()
      })
    })
  },
  // 前端 登出
  FedLogOut({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
};

//getters 类似于生命周期里面的钩子，getters是在页面刚刚加载完毕之后马上加载，类似于生命周期里面的created
const getters = {
  x: state => state.x + 200,
};
export default new vuex.Store({
  state,
  mutations,
  getters,
  actions
})
