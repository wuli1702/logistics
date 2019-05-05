import { observable, action } from 'mobx';
import {
  getUserInfo
} from '@services/user.js';

class User {
  @observable userInfo;

  @action fetchUserInfo = () => {
    getUserInfo().then((data) => {
      this.userInfo = data;
    })
  }

  constructor() {
    this.userInfo = {};
  }
}

const user = new User();

export default user;