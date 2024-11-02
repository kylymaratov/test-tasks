import Image from 'next/image';
import styles from './Footer.module.scss';
import FooterLogo from '@/public/images/footer_logo.png';
import Link from 'next/link';
import FacebookIcon from '@/public/icons/facebook.svg';
import InstagramIcon from '@/public/icons/instagram.svg';
import WhatsappIcon from '@/public/icons/whatsapp.svg';
import YoutubeIcon from '@/public/icons/youtube.svg';
import TelegramIcon from '@/public/icons/telegram.svg';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image src={FooterLogo} alt="logo" />
        <div className={styles.socials}>
          <Image src={FacebookIcon} alt="facebook" />
          <Image src={InstagramIcon} alt="instagram" />
          <Image src={WhatsappIcon} alt="whatsapp" />
          <Image src={YoutubeIcon} alt="youtube" />
          <Image src={TelegramIcon} alt="telegram" />
        </div>
        <p>© Copyright 2024, Все права защищены</p>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link href="/about">О компании</Link>
        </li>
        <li>
          <Link href="/testing">Тестирование</Link>
        </li>
        <li>
          <Link href="/analitycs">Аналитика</Link>
        </li>
      </ul>
      <div className={styles.info}>
        <div>
          <p>Контакты</p>
          <strong>(+996) 556-495-353</strong>
        </div>
        <div>
          <p>Наш e-mail</p>
          <strong>mail@example.com</strong>
        </div>
        <div>
          <p>Наш адрес</p>
          <strong>Байтик Баатыра 66/1</strong>
        </div>
      </div>
    </div>
  );
};
