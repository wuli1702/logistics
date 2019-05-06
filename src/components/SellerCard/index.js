import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './index.less';

class sellerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { data } = this.props;

    // id: 1,
    // pic: 'http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg',
    // name: '孟记粥铺(立水桥店)',
    // remark: '孟记粥铺新开张，欢迎体验',
    // notice: ['欢迎品尝新品南瓜粥', '武汉热干面超级好吃']

    return (
      <div className="seller-wrap">
        <div className="seller-avatar">
          <img src={data.pic} alt="avatar" />
        </div>
        <div className="seller-content">
          <div className="seller-name">{data.name}</div>
          <div className="seller-remark">{data.remark}</div>
        </div>
        <div className="seller-background">
          <img src={data.pic} alt="sellerbg" />
        </div>
        <div className="seller-carousel">
          <span className="seller-wingblank-title"></span>
          <div className="seller-wingblank-wrap">
            <WingBlank>
              <Carousel
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
              >
                {data.notice.map((i, index) => <div key={index} className="seller-carousel-item">{i}</div>)}
              </Carousel>
            </WingBlank>
          </div>
        </div>
      </div>
    );
  }
}

export default sellerCard;