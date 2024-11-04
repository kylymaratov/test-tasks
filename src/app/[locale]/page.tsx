import AnimatedSection from '@/components/Animation/AnimationSection';
import styles from './styles/Home.module.scss';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/features/Header/Header'));
const SpecialistSearch = dynamic(
  () => import('@/features/SpecialistSearch/SpecialistSearch'),
);
const MainSection = dynamic(() => import('@/features/Main/Main'));
const CreateProfile = dynamic(
  () => import('@/features/CreateProfile/CreateProfile'),
);
const NumbersThatMatter = dynamic(
  () => import('@/features/NumbersThatMatter/NumbersThatMatter'),
);
const CandidateInfo = dynamic(
  () => import('@/features/CandidateInfo/CandidateInfo'),
);
const News = dynamic(() => import('@/features/News/News'));
const Footer = dynamic(() => import('@/features/Footer/Footer'));

const sections = [
  { id: 'specialistSearch', component: SpecialistSearch },
  { id: 'createProfile', component: CreateProfile },
  { id: 'numbersThatMatter', component: NumbersThatMatter },
  { id: 'candidateInfo', component: CandidateInfo },
  { id: 'news', component: News },
  { id: 'footer', component: Footer },
];

function Home() {
  return (
    <>
      <section id="appBar" className={styles.appBar}>
        <Header />
        <MainSection />
      </section>
      {sections.map(({ id, component: Component }) => (
        <AnimatedSection key={id}>
          <section id={id} className={styles[id]}>
            <Component />
          </section>
        </AnimatedSection>
      ))}
    </>
  );
}

export default Home;
