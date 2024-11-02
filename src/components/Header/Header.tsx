'use client';

import Image from 'next/image';
import styles from './Header.module.scss';
import DropDownIcon from '@/public/icons/drop_down.svg';
import Logo from '@/public/images/logo.png';
import SearchIcon from '@/public/icons/search.svg';
import LanguageIcon from '@/public/icons/language.svg';
import Link from 'next/link';
import { Container } from '../Container/Container';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const [fixed, setFixed] = useState<boolean>(false);

  const menuList = useMemo(
    () => [
      {
        title: 'О компании',
        href: '/about',
      },
      {
        title: 'Тестирование',
        href: '/testing',
      },
      {
        title: 'Новости',
        href: '/news',
      },
      {
        title: 'Аналитика',
        href: '/analytics',
      },
      {
        title: 'Заказы',
        href: '/orders',
      },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.header}>
      <Container className={styles.withBg}>
        <div className={styles.appInfo}>
          <div className={styles.address}>
            <p>Байтик Баатыра 66/1</p>
            <p>admin@gmail.com</p>
          </div>
          <div className={styles.contacts}>
            <p>+996 500 700 800</p>
            <hr />
            <p>+996 500 700 800</p>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classNames(styles.navbar, fixed && styles.fixed)}>
          <div className={styles.logo}>
            <Image src={Logo} alt="logo" />
          </div>
          <div className={styles.menu}>
            {menuList.map((item, i) => (
              <li key={i}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </div>
          <div className={styles.controls}>
            <button type="button" className={styles.search}>
              <Image src={SearchIcon} alt="search" />
            </button>
            <button type="button" className={styles.languageSwitcher}>
              <Image src={LanguageIcon} alt="language" />
              <span>
                рус <Image src={DropDownIcon} alt="dropdown" />
              </span>
            </button>
            <button type="button" className={styles.loginBtn}>
              Войти
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
