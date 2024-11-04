'use client';
import Image from 'next/image';
import { UseConent } from './hooks/UseContent';
import styles from './News.module.scss';
import { Container } from '../Container/Container';

const News: React.FC = () => {
  const { news } = UseConent();

  const openNews = () => {};

  return (
    <Container>
      <div className={styles.news}>
        <h1>Новости</h1>
        <p>
          В данном разделе вы можете ознакомиться с важными
          <br />
          политическими и экономическими новостями нашего мира
        </p>
        <div className={styles.gallery}>
          {news.map((n, i) => (
            <div key={i} className={styles.nw}>
              <Image src={n.img} alt={n.title} />
              <p className={styles.type}>{n.type}</p>
              <div className={styles.content}>
                <p className={styles.title}>{n.title}</p>
                <p className={styles.subTitle}>{n.subTitle}</p>
                {n.button && (
                  <button
                    type="button"
                    className={styles.openNews}
                    onClick={() => n.button(openNews)}
                  >
                    {n.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default News;
