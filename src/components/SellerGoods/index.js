import React, { Component } from 'react';
// import { Carousel, WingBlank } from 'antd-mobile';
import CartControl from '@components/CartControl';
import BScroll from 'better-scroll';
import './index.less';

class SellerGoods extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    new BScroll('.goods-menu-wrap');
    new BScroll('.goods-list-wrap');
  }

  render() {
    const { data } = this.props;

    return (
      <div className="goods-wrap">
        <div className="goods-menu-wrap">
          <div className="goods-menu">
            {data.map(item => {
              return <div className="goods-munu-nav" key={item.name}>
                <span className="goods-munu-nav-title">{item.name}</span>
              </div>
            })}
            <div className="goods-munu-nav">
              <span className="goods-munu-nav-title">测试1</span>
            </div>
            <div className="goods-munu-nav">
              <span className="goods-munu-nav-title">测试2</span>
            </div>
            <div className="goods-munu-nav">
              <span className="goods-munu-nav-title">测试3</span>
            </div>
            <div className="goods-munu-nav">
              <span className="goods-munu-nav-title">测试4</span>
            </div>
          </div>
        </div>
        <div className="goods-list-wrap">
          <div className="goods-list">
              {data.map(item => {
                return (
                  <div key={item.name}>
                  <div className="goods-munu-nav-title">
                    <h2>{item.name}</h2>
                  </div>
                  <ul className="food-items">
                    {item.foods.map((food, index) => (
                      <li className="food-item" key={index}>
                        <div className="icon">
                          <img width="57" height="57" src={food.icon} alt="pic" />
                        </div>
                        <div className="content">
                          <h2 className="name">{food.name}</h2>
                          <p className="desc">{food.description}</p>
                          <div className="extra">
                            <span className="count">月售{food.sellCount}份</span><span>好评率{food.rating}%</span>
                          </div>
                          <div className="price">
                            <span className="now">￥{food.price}</span>
                            {food.oldPrice?<span className="old">￥{food.oldPrice}</span>:null}
                          </div>
                          <div className="cart-control-wrapper">
                            <CartControl food={food}></CartControl>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default SellerGoods;