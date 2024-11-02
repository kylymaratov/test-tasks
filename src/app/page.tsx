import { Header } from '@/components/Header/Header';
import styles from './styles/Home.module.scss';
import { SpecialistSearch } from '@/components/SpecialistSearch/SpecialistSearch';
import { MainSection } from '@/components/Main/Main';
import { CreateProfile } from '@/components/CreateProfile/CreateProfile';
import { NumbersThatMatter } from '@/components/NumbersThatMatter/NumbersThatMatter';
import { CandidateInfo } from '@/components/CandidateInfo/CandidateInfo';
import { News } from '@/components/News/News';
import { Footer } from '@/components/Footer/Footer';

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
