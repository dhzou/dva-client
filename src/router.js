import React from "react";
import { Router, Route, Switch } from "dva/router";
import Loadable from "react-loadable";
import PrivateRoute from "./components/authrouter";
import dynamic from "dva/dynamic"; // 异步加载路由

const AsyncIndex = Loadable({
  timeout: 3000,
  loading() {
    return <div>loading....</div>;
  },
  loader: () => import("./routes/homePage")
});

function RouterConfig({ history, app }) {
  // 首页
  const homePage = dynamic({
    app,
    component: () => import("./routes/homePage")
  });
  // 结果页
  const resultPage = dynamic({
    app,
    component: () => import("./routes/resultPage")
  });

  // 创建用户
  const newPage = dynamic({
    app,
    component: () => import("./routes/newPage")
  });



  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact component={homePage} />
        <PrivateRoute path="/result" exact component={resultPage} />
        <PrivateRoute path="/newUser" exact component={newPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
