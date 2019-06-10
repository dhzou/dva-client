import dva from 'dva';
import './index.css';
import './assets/css/reset.less';

import { createBrowserHistory } from 'history';


// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
  // 此处优先级低于redux state
  initialState: {}
});


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
