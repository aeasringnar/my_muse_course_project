import Vue from 'vue'
import vuex from 'vuex'
// import Cookies from 'js-cookie'
import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/user'

import home_no from '../static/icon/home_no.png'
import home from '../static/icon/home.png'
import course_no from '../static/icon/course_no.png'
import course from '../static/icon/course.png'
import user_no from '../static/icon/user_no.png'
import user from '../static/icon/user.png'

Vue.use(vuex);

//state为访问状态对象 数字常量等
const state = {
  x:5,
  token: getToken(),
  nickname: '',
  home_url: home,
  course_url: course_no,
  user_url: user_no
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
