import { observable, action } from 'mobx';
// import {
//   getSellerInfo,
//   getMenu
// } from '@services/order.js';

class Order {
  constructor() {
    this.sellerInfo = {};
    this.menu = [];
  }

  @observable sellerInfo;
  @observable menu;

  @action fetchSellerInfo = () => {
    this.sellerInfo = {
      id: 1,
      pic: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
      name: '孟记粥铺(立水桥店)',
      remark: '孟记粥铺新开张，欢迎品尝！地址在东小口镇政府边上哦，离龙德广场也很近,请你一定要和你最好的朋友一起来哟！',
      notice: ['欢迎品尝新品南瓜粥!', '武汉热干面超级好吃!', 'bb是世界上最好看的女孩子，也是最聪明最善良和单纯的女孩子!']
    };
    // 正式环境放开
    // getSellerInfo().then(data => {
    //   this.sellerInfo = data;
    // })
  }

  @action fetchMenu = () => {
    this.menu = [];
    // 正式环境放开
    // return getMenu().then(data => {
    //   this.menu = data;
    // })
  }
}

const order = new Order();

export default order;