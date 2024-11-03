import { Header } from '@/features/Header/Header';
import styles from './styles/Home.module.scss';
import { SpecialistSearch } from '@/features/SpecialistSearch/SpecialistSearch';
import { MainSection } from '@/features/Main/Main';
import { CreateProfile } from '@/features/CreateProfile/CreateProfile';
import { NumbersThatMatter } from '@/features/NumbersThatMatter/NumbersThatMatter';
import { CandidateInfo } from '@/features/CandidateInfo/CandidateInfo';
import { News } from '@/features/News/News';
import { Footer } from '@/features/Footer/Footer';

function Home() {
  return (
    <>
      <section id="appBar" className={styles.appBar}>
        <Header />
        <MainSection />
      </section>
      <section id="specialistSearch" className={styles.specialistSearch}>
        <SpecialistSearch />
      </section>
      <section id="createProfile" className={styles.createProfile}>
        <CreateProfile />
      </section>
      <section id="numbersThatMatter" className={styles.numbersThatMatter}>
        <NumbersThatMatter />
      </section>
      <section id="candidateInfo" className={styles.candidateInfo}>
        <CandidateInfo />
      </section>
      <section id="news" className={styles.news}>
        <News />
      </section>
      <section id="footer" className={styles.footer}>
        <Footer />
      </section>
    </>
  );
}

export default Home;
