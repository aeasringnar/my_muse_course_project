import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/account/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/account/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/account/logout',
    method: 'post'
  })
}
