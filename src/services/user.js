import { Request } from '@utils/request.js';
import md5 from 'md5';

const register = data => {
  return Request.post('/api/register', {
    username: data.username,
    password: md5(data.password)
  })
}

const login = data => {
  return Promise.resolve({
    username: data.username
  })
  // 正式环境放开
  // return Request.post('/api/login', {
  //   username: data.username,
  //   password: md5(data.password)
  // })
}

const logout = () => {
  return Request.post('/api/logout')
}

const getUserInfo = () => {
  return Promise.resolve({
    username: ''
  })
  // 正式环境放开
  // return Request.get('/api/getuserinfo')
}

export {
  register,
  login,
  logout,
  getUserInfo
}