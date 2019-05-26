import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Card, WhiteSpace, Button, Toast } from 'antd-mobile';
import './index.less';

@inject('order')
@observer
class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  submitHandle = () => {
    Toast.success('提交成功！')
  }

  render() {
    const { order } = this.props;

    return (
      <div className="submit-container">
        {/*JSON.stringify(order.selectedGoods)*/}
        <div className="submit-header">提交订单</div>
        <div className="submit-content">
          <Card>
            <Card.Body>
              <div className="submit-address">北京市朝阳区恒电大厦</div>
              <div className="submit-info"><span>巫(女士)</span> <span>155****1573</span></div>
            </Card.Body>
            <Card.Footer content="立即送出"/>
          </Card>
          <WhiteSpace size="sm" />
          <Card>
            <Card.Body>
              <ul>
                {order.selectedGoods.map((food, index) => {
                  return (
                    <li className="food" key={index}>
                      <span className="name">{food.name}x{food.count}</span>
                      <div className="price">
                        <span>￥{food.price * food.count}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Card.Body>
          </Card>
        </div>
        <WhiteSpace size="lg" />
        <div className="submit-footer">
          <Button
            type="primary"
            onClick={this.submitHandle}
          >
            提交
          </Button>
        </div>
      </div>
    );
  }
}

export default Submit;