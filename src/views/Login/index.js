import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { Link } from 'react-router-dom';
import { List, InputItem, Button } from 'antd-mobile';
import './index.less';

@inject('user')
@observer
class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    // const { clickTimes } = this.props;
    const { user } = this.props;
    const { username, password } = this.state;

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
      <div className="login-container">
        <div className="login-body">
          <p className="login-title">请登录</p>
          <List className="login-inputs">
            <InputItem
              value={username}
              onChange={value => { this.setState({ username: value }) }}
              clear
            >
              用户名
            </InputItem>
            <InputItem
              value={password}
              onChange={value => { this.setState({ password: value }) }}
              type="password"
              clear
            >
              密码
            </InputItem>
          </List>
          <Button
            type="primary"
            onClick={() => {
              user.login({username, password}).then(res => {console.log(res)})
            }}
          >登录</Button>
        </div>
      </div>
    );
  }
}

export default Home;