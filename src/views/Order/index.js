import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
// import { List, InputItem, Button } from 'antd-mobile';
import SellerCard from '@components/SellerCard';
import SellerGoods from '@components/SellerGoods';
import ShopCart from '@components/ShopCart';
import './index.less';

@inject('order')
@observer
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    const { order } = this.props;

    order.fetchSellerInfo();
  }

  render() {
    const { order } = this.props;
    const { id, pic, name, remark, notice } = order.sellerInfo;

    return (
      <div className="order-container">
        <div className="order-sellerinfo">
          <SellerCard data={{id, pic, name, remark, notice }}></SellerCard>
        </div>
        <div className="order-goods">
          <SellerGoods data={order.sellerInfo.goods}></SellerGoods>
        </div>
        <div className="order-shopcart">
          <ShopCart data={order.selectedGoods}></ShopCart>
        </div>
      </div>
    );
  }
}

export default Home;