import Draw from '@/public/images/section_1/draw.png';
import styles from './Main.module.scss';
import Image from 'next/image';

export const MainSection: React.FC = () => {
  return (
    <div className={styles.mainSection}>
      <h1>matrix</h1>
      <p>
        Платформа для исследования
        <br /> вовлечённости и лояльности персонала
      </p>
      <Image src={Draw} alt="draw" />
    </div>
  );
};
