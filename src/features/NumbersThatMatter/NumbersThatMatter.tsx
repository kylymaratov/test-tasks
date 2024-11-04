'use client';
import styles from './NumberThatMatter.module.scss';
import { UseContent } from './hooks/UseContent';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedNumber from '@/components/Animation/AnimationNumber';

const NumbersThatMatter: React.FC = () => {
  const { statistics, cardStatistics } = UseContent();

  return (
    <div className={styles.numbersThatMatter}>
      <h1>Цифры, которые говорят за нас</h1>
      <div className={styles.statistics}>
        <div className={styles.procentStats}>
          {statistics.map((item, i) => (
            <div className={styles.procentStat} key={i}>
              <div>
                <Image src={item.img} alt="image" loading="lazy" />
                <AnimatedNumber from={0} to={item.procent} endText="%" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.awardStats}>
          {cardStatistics.map((item, i) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: i / 3, type: 'spring', delay: 1.5 }}
              className={styles.awardStat}
              key={i}
            >
              <div>
                <h1>{item.title}</h1>
                <Image src={item.icon} alt="icon" loading="lazy" />
              </div>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumbersThatMatter;
