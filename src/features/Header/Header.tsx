'use client';

import Image from 'next/image';
import styles from './Header.module.scss';
import DropDownIcon from '@/public/icons/drop_down.svg';
import Logo from '@/public/images/logo.png';
import SearchIcon from '@/public/icons/search.svg';
import LanguageIcon from '@/public/icons/language.svg';
import Link from 'next/link';
import { Container } from '../Container/Container';
import { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { useTranslationContext } from '@/context/TranslationContext';
import { Languages } from '@/utils/dictionaries';
import { DropList } from '@/components/DropList/DropList';
import UseVisible from '@/hooks/UseVisible';

const localNames = {
  en: 'eng',
  ru: 'рус',
};

const getLangName = (locale: Languages) => {
  return localNames[locale];
};

export const Header: React.FC = () => {
  const { t, locale } = useTranslationContext();
  const [fixed, setFixed] = useState<boolean>(false);
  const languageSwitcher = UseVisible(false);

  const menuList = useMemo(
    () => [
      {
        title: t?.home.navbar.menu_1,
        href: '/about',
      },
      {
        title: t?.home.navbar.menu_2,
        href: '/testing',
      },
      {
        title: t?.home.navbar.menu_3,
        href: '/news',
      },
      {
        title: t?.home.navbar.menu_4,
        href: '/analytics',
      },
      {
        title: t?.home.navbar.menu_5,
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
            <button
              type="button"
              className={styles.languageSwitcher}
              onClick={() => languageSwitcher.setIsComponentVisible(true)}
            >
              <Image src={LanguageIcon} alt="language" />
              <span>
                {getLangName(locale)}{' '}
                <Image src={DropDownIcon} alt="dropdown" />
              </span>
              <DropList
                ref={languageSwitcher.ref}
                open={languageSwitcher.isComponentVisible}
              >
                <div className={styles.link}>
                  <Link href="/ru">{t?.home.navbar.language_ru}</Link>
                </div>
                <div className={styles.link}>
                  <Link href="/en">{t?.home.navbar.language_en}</Link>
                </div>
              </DropList>
            </button>
            <button type="button" className={styles.loginBtn}>
              {t?.home.navbar.loginBtn}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
