import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
// import { Button } from 'antd-mobile';
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
        {user.userInfo.username ? <div className="home-header">
          <span className="home-header-span">{'欢迎您，'+user.userInfo.username}</span>
        </div> : null}
        <div className="home-body">
          {/*外卖点餐系统*/}
        </div>
        <div className="home-footer">
          {user.userInfo.username ? <Link to="/order" className="home-footer-btn">点餐</Link> : <Link to="/login" className="home-footer-btn">登录</Link>}
        </div>
      </div>
    );
  }
}

export default Home;