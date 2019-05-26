import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import './index.less';

@inject('order')
@observer
class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { order } = this.props;

    return (
      <div>{JSON.stringify(order.selectedGoods)}</div>
    );
  }
}

export default Submit;