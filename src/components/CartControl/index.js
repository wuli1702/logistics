import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './index.less';

@inject('order')
@observer
class CartControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  decrease = () => {
    const { food } = this.props;

    if (food.count) {
      food.count --;
    }
  }

  add = () => {
    const { food } = this.props;

    if (food.count) {
      food.count ++;
    } else {
      food.count = 1;
    }
  }

  render() {
    const { food } = this.props;

    return (
      <div className="cart-control">
        {food.count > 0 ? <span className="cart-decrease" onClick={this.decrease}>-</span>:null}
        {food.count > 0 ? <span className="cart-count">{food.count}</span>:null}
        <span className="cart-add" onClick={this.add}>+</span>
      </div>
    )
  }

}

export default CartControl;