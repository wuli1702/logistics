import axios from 'axios';
import { Toast } from 'antd-mobile';

const TIMEOUT = 3000;

function Fetch (params) {
  return axios({
    timeout: TIMEOUT,
    ...params
  })
  .then((res) => {
    if (res.status < 200 || res.status >= 300) {
      return Promise.reject(res);
    } else {
      const data = res.data;
      if (data.code < 200 || data.code >= 300) {
        return Promise.reject(data.message || '服务器出错了~');
      } else {
        return Promise.resolve(data.data);
      }
    }
  })
  .catch((error) => {
    Toast.fail(error.message || '服务器出错了~');
  });
}

const Request = {
  get: (url, params) => {
    return Fetch({
      method: 'get',
      url,
      params
    })
  },
  post: (url, params) => {
    return Fetch({
      method: 'post',
      url,
      params
    })
  },
}

export {
  Fetch,
  Request
}