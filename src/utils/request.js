import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
import store from '../store'
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8000', // api的base_url  process.env.BASE_API
  timeout: 20 * 1000 // 请求超时时间
})

// request拦截器,拦截每一个请求加上请求头
service.interceptors.request.use(config => {
  config.headers.post['Content-Type'] = 'application/x-www-fromurlencodeed'
  if (store.state.token) {
    // console.log('token存在') // 如果token存在那么每个请求头里面全部加上token
    config.headers['Authorization'] = 'bearer ' + store.state.token
  }
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器 拦截到所有的response，然后先做一些判断
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(res)
    console.log('会拦截所有response')
    if (res.errorCode !== 0) {
      alert('有一定的错误存在:' + res.message)
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)// for debug
    alert('error')
    return Promise.reject(error)
  }
)

export default service
