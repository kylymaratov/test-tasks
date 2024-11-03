import { ReactNode, Ref } from 'react';
import styles from './DropList.module.scss';
import classNames from 'classnames';

interface Props {
  open?: boolean;
  children: ReactNode;
  className?: string;
  ref: Ref<HTMLDivElement>;
}

export const DropList: React.FC<Props> = ({
  children,
  className,
  open = false,
  ref,
}) => {
  return (
    <div className={styles.dropList} ref={ref}>
      <div className={classNames(styles.list, className, open && styles.open)}>
        <div className={styles.arrow} />
        {children}
      </div>
    </div>
  );
};
