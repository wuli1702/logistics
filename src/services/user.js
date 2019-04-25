import { Request } from '@utils/request.js';
import md5 from 'md5';

const register = data => {
  Request.post('/api/register', {
    username: data.username,
    password: md5(data.password)
  })
}

export {
  login,
}