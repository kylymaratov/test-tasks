'use client';
import Draw from '@/public/images/section_1/draw.png';
import styles from './Main.module.scss';
import Image from 'next/image';
import { useTranslationContext } from '@/context/TranslationContext';

export const MainSection: React.FC = () => {
  const { t } = useTranslationContext();
  return (
    <div className={styles.mainSection}>
      <h1>matrix</h1>
      <p>{t?.home.section_1.text}</p>
      <Image src={Draw} alt="draw" />
    </div>
  );
};
