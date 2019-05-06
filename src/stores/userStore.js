import { observable, action } from 'mobx';
import {
  getUserInfo,
  login,
  logout
} from '@services/user.js';

class User {
  @observable userInfo;

  @action fetchUserInfo = () => {
    return getUserInfo().then(data => {
      this.userInfo = data;
    })
  }

  @action login = (params) => {
    return login(params)
  }

  @action logout = () => {
    return logout().then(data => {
      this.userInfo = {};
    })
  }

  constructor() {
    this.userInfo = {};
  }
}

const user = new User();

export default user;