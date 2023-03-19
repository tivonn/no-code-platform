import { Button } from '@douyinfe/semi-ui';
import styles from './index.module.less';

const Header: React.FC = () => (
  <div className={styles.header}>
    <div className={styles.operations}>
      <Button type="tertiary">保存</Button>
      <Button type="tertiary">预览</Button>
      <Button type="tertiary">源码下载</Button>
    </div>
  </div>
);

export default Header;
