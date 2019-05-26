import React, { Component } from 'react';
import { Modal } from 'antd-mobile';
import BScroll from 'better-scroll';
import CartControl from '@components/CartControl';
import './index.less';

const Alert = Modal.alert;

class CartList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    new BScroll('.list-content');
  }

  empty = () => {
    const { handleclick, selectedgoods } = this.props;

    Alert('', '清空购物车？', [{
      text: '取消'
    }, {
      text: '确认',
      onPress: () => {
        selectedgoods.forEach((food) => {
          food.count = 0
        })
        handleclick();
      }
    }])
  }

  render() {
    const { selectedgoods } = this.props;
    console.log(selectedgoods);
    return (
      <div className="cart-list">
        <div className="list-header">
          <h1 className="title">购物车</h1>
          <span className="empty" onClick={this.empty}>清空</span>
        </div>
        <div className="list-content">
          <div>
            <ul>
              {selectedgoods.map((food, index) => {
                return (
                  <li className="food" key={index}>
                    <span className="name">{food.name }</span>
                    <div className="price">
                      <span>￥{ food.price * food.count }</span>
                    </div>
                    <div className="cart-control-wrapper">
                      <CartControl food={food}></CartControl>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CartList;