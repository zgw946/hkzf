import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { TabBar } from "antd-mobile";
import styles from "./index.module.scss";
// 导入组件
import Index from "../Index"; //首页
import HouseList from "../HouseList"; // 找房页面
import Profile from "../Profile"; // 个人页面
import News from "../News"; //咨询页面
class Home extends Component {
  state = {
    selectedTab: this.props.location.pathname
  };
  // tabs数组
  TABS = [
    {
      title: "首页",
      icon: "icon-index",
      path: "/home"
    },
    {
      title: "找房",
      icon: "icon-findHouse",
      path: "/home/houseList"
    },
    {
      title: "资讯",
      icon: "icon-info",
      path: "/home/news"
    },
    {
      title: "我的",
      icon: "icon-my",
      path: "/home/profile"
    }
  ];
  // taBar结构代码
  renderTabar = () => {
    return (
      <TabBar tintColor="#21B97A" noRenderContent={false}>
        {this.TABS.map(item => {
          return (
            <TabBar.Item
              icon={<i className={`iconfont ${item.icon}`}></i>}
              selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
              title={item.title}
              key={item.path}
              selected={this.state.selectedTab === item.path}
              onPress={() => {
                // this.setState({
                //   selectedTab: item.path
                // });
                // this.props.history.push(item.path);
                if (this.props.location.pathname !== item.path) {
                  this.props.history.push(item.path);
                }
              }}
            ></TabBar.Item>
          );
        })}
      </TabBar>
    );
  };
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname
      });
    }
  }
  render() {
    return (
      <Fragment>
        {/* 路由切换 */}
        <div className={styles.home}>
          <Route exact path="/home" component={Index} />
          <Route path="/home/houseList" component={HouseList} />
          <Route path="/home/profile" component={Profile} />
          <Route path="/home/news" component={News} />
          {/* taBar栏切换 */}
          <div className={styles.tabbar}>{this.renderTabar()}</div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
