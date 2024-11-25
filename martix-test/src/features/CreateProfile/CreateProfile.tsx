import Image from 'next/image';
import styles from './CreateProfile.module.scss';
import CreateProfileDraw from '@/public/images/section_3/create_proifle_draw.png';

const CreateProfile: React.FC = () => {
  return (
    <div className={styles.createProfile}>
      <div className={styles.info}>
        <h1>
          Создайте свою
          <br /> уникальную анкету
        </h1>
        <p>
          Разместите информацию о себе на передовой
          <br /> платформе MATRIX и повысьте шанс быть замеченными
          <br /> крупнейшими компаниями Центральной Азии!
        </p>
        <button>Создать</button>
      </div>
      <div className={styles.banner}>
        <Image src={CreateProfileDraw} alt="createProfile" />
      </div>
    </div>
  );
};

export default CreateProfile;
