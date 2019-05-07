import React, { Component } from 'react';
// import { Carousel, WingBlank } from 'antd-mobile';
import BScroll from 'better-scroll'
import './index.less';

class SellerGoods extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    new BScroll('.goods-menu-wrap');
  }

  render() {
    const { data } = this.props;

    return (
      <div className="goods-wrap">
        <div className="goods-menu-wrap">
          <div className="goods-menu">
            {data.map(item => {
              return <div className="goods-munu-nav">
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
              return <div className="goods-item">
                <span className="goods-munu-nav-title">{item.name}</span>
              </div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SellerGoods;