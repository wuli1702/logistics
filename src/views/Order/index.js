import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import SellerCard from '@components/SellerCard';
import SellerGoods from '@components/SellerGoods';
import ShopCart from '@components/ShopCart';
import CartList from '@components/CartList';
import './index.less';

@inject('order')
@observer
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCartList: false
    };
  }

  componentWillMount() {
    const { order } = this.props;

    order.fetchSellerInfo();
  }

  handleClick = () => {
    const { order } = this.props;
    const { selectedGoods } = order;

    if (selectedGoods.length || this.state.showCartList) {
      this.setState({
        showCartList: !this.state.showCartList
      })
    }
  }

  render() {
    const { showCartList } = this.state;
    const { order } = this.props;
    const { sellerInfo, selectedGoods } = order;
    const { id, pic, name, remark, notice, goods } = sellerInfo;
    let totalPrice = 0;
    let totalCount = 0;
    selectedGoods.forEach((food) => {
      totalPrice += food.price * food.count;
      totalCount += food.count;
    });

    return (
      <div className="order-container">
        <div className="order-sellerinfo">
          <SellerCard data={{id, pic, name, remark, notice }}></SellerCard>
        </div>
        <div className="order-goods">
          <SellerGoods data={goods}></SellerGoods>
        </div>
        {showCartList ? <div className="order-cartlist"><CartList selectedgoods={selectedGoods} handleclick={this.handleClick}></CartList></div>:null}
        <div className="order-shopcart">
          <ShopCart totalprice={totalPrice} totalcount={totalCount} handleclick={this.handleClick}></ShopCart>
        </div>
      </div>
    );
  }
}

export default Home;