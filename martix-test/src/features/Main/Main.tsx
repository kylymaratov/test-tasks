'use client';
import Draw from '@/public/images/section_1/draw.png';
import styles from './Main.module.scss';
import Image from 'next/image';
import { useTranslationContext } from '@/context/TranslationContext';
import { motion } from 'framer-motion';

const MainSection: React.FC = () => {
  const { t } = useTranslationContext();
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', duration: 0.7 }}
      className={styles.mainSection}
    >
      <h1>matrix</h1>
      <p>{t?.home.section_1.text}</p>
      <Image src={Draw} alt="draw" priority />
    </motion.div>
  );
};

export default MainSection;
