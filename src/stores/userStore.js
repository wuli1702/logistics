import { observable, action } from 'mobx';
import {
  // 正式环境放开
  // getUserInfo,
  login,
  logout
} from '@services/user.js';

class User {
  constructor() {
    this.userInfo = {};
  }

  @observable userInfo;

  @action fetchUserInfo = () => {
    return this.userInfo;
    // 正式环境放开
    // return getUserInfo().then(data => {
    //   this.userInfo = data;
    // })
  }

  @action login = params => {
    return login(params)
  }

  @action logout = () => {
    return logout().then(data => {
      this.userInfo = {};
    })
  }

  @action saveUserInfo = data => {
    this.userInfo = data;
  }
}

const user = new User();

export default user;