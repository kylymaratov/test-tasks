import Image from 'next/image';
import styles from './CandidateInfo.module.scss';
import CandidateInfoDraw from '@/public/images/section_5/candidate_info_draw.png';
import { Container } from '../Container/Container';

export const CandidateInfo: React.FC = () => {
  return (
    <Container>
      <div className={styles.candidateInfo}>
        <div>
          <h1>
            Узнай больше о<br /> своем кандидате
            <br /> прямо сейчас
          </h1>
          <button type="button">Узнать</button>
        </div>
        <Image src={CandidateInfoDraw} alt="candidateInfo" />
      </div>
    </Container>
  );
};
