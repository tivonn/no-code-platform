import { Switch, Route } from '@modern-js/runtime/router';

import 'normalize.css';
import './App.less';

const App = () => (
  <Switch>
    <Route exact={true} path="/">
      <div className="container-box">hello no code platform</div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
