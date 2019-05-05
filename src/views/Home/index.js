import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Button } from 'antd-mobile';
import './index.less';

@inject('user')
@observer
class Home extends Component {
  componentWillMount() {
    const { user } = this.props;

    user.fetchUserInfo();
  }

  render() {
    // const { clickTimes } = this.props;
    const { user } = this.props;

    return (
      // <div className="App">
      //   <div className="App-header">
      //     <Icon type="success" size="lg"/>
      //     <div className="App-logo" style={{ width: 60, height:60 }}>{customIcon()}</div>
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <Button type="primary" onClick={() => {clickTimes.increase(1)}}>This is a button</Button>
      //   <div>点击次数：{clickTimes.times}</div>
      // </div>
      <div className="home-container">
        <div className="home-header">
          {user.userInfo.username ? <span>{user.userInfo.username}</span>:<Link to="/login" className="home-header-span">请登录</Link>}
        </div>
        <div className="home-body"></div>
        <div className="home-footer">
          <Button className="home-footer-btn" type="primary">点餐</Button>
        </div>
      </div>
    );
  }
}

export default Home;