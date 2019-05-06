import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { Redirect } from 'react-router';
// import { Link } from 'react-router-dom';
// import { List, InputItem, Button } from 'antd-mobile';
import SellerCard from '@components/SellerCard';
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

    return (
      <div className="order-container">
        <SellerCard
          data={order.sellerInfo}
        ></SellerCard>
        <div className="order-body">
          菜单
        </div>
      </div>
    );
  }
}

export default Home;