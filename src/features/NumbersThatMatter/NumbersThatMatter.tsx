import { useMemo } from 'react';
import styles from './NumberThatMatter.module.scss';
import { UseContent } from './hooks/UseContent';
import Image from 'next/image';

export const NumbersThatMatter: React.FC = () => {
  const { statistics, cardStatistics } = UseContent();

  return (
    <div className={styles.numbersThatMatter}>
      <h1>Цифры, которые говорят за нас</h1>
      <div className={styles.statistics}>
        <div className={styles.procentStats}>
          {statistics.map((item, i) => (
            <div className={styles.procentStat} key={i}>
              <div>
                <Image src={item.img} alt="image" />
                <p>{item.procent}%</p>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.awardStats}>
          {cardStatistics.map((item, i) => (
            <div className={styles.awardStat} key={i}>
              <div>
                <h1>{item.title}</h1>
                <Image src={item.icon} alt="icon" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
