import React, { Component, Fragment } from "react";
// 导入字体图标样式
import "./assets/fonts/iconfont.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          {/* 变化的部分 */}
          <div style={{height:"100%"}}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
              <Redirect exact from="/" to="home" />
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}
export default App;
