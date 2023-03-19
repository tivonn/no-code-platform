import { Tabs, TabPane } from '@douyinfe/semi-ui';
import styles from './index.module.less';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <Tabs type="line" className={styles.overview}>
        <TabPane tab="页面总览" itemKey="page" className={styles.overviewBody}>
          页面列表
        </TabPane>
        <TabPane tab="物料总览" itemKey="material">
          物料列表
        </TabPane>
      </Tabs>
      <div className={styles.material}>
        <p>物料</p>
      </div>
    </div>
  );
};

export default Sidebar;
