import { Request } from '@utils/request.js';
import md5 from 'md5';

const register = data => {
  return Request.post('/api/register', {
    username: data.username,
    password: md5(data.password)
  })
}

const login = data => {
  return Request.post('/api/login', {
    username: data.username,
    password: md5(data.password)
  })
}

const logout = data => {
  return Request.post('/api/logout')
}

const getUserInfo = data => {
  return Promise.resolve({
    username: 'bb'
  })
  // return Request.get('/api/getuserinfo')
}

export {
  register,
  login,
  logout,
  getUserInfo
}