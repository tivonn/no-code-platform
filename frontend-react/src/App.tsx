import { Switch, Route } from '@modern-js/runtime/router';

import 'normalize.css';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import './App.less';
import styles from './index.module.less';

import Main from './pages/design';

const App: React.FC = () => (
  <Switch>
    <Route exact={true} path="/">
      <div className={styles.app}>
        <Main />
      </div>
    </Route>
    <Route path="*">
      <div>404</div>
    </Route>
  </Switch>
);

export default App;
