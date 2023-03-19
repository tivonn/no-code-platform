import Header from './header';
import Sidebar from './sidebar';
import styles from './index.module.less';

const Design: React.FC = () => (
  <div className={styles.design}>
    <Header />
    <div className={styles.designBody}>
      <Sidebar />
      <div>canvas</div>
      <div>config</div>
    </div>
  </div>
);

export default Design;
