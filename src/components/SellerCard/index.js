import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './index.less';

class SellerCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { data } = this.props;

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

export default SellerCard;