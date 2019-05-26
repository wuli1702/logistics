import React, { Component } from 'react';
import './index.less';

class ShopCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { totalprice, totalcount, handleclick } = this.props;

    return (
      <div className="shopcart-wrap">
        <div className="shopcart-left">
          <div className="shopcart-count" onClick={handleclick}>{totalcount}</div>
          <div className="shopcart-total">￥{totalprice}</div>
          <div className="shopcart-desc">送餐免费哟</div>
        </div>
        <div className="shopcart-right">
          <div className="shopcart-submit">去结算</div>
        </div>
      </div>
    )
  }
}

export default ShopCart;