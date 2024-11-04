'use client';
import { useMemo, useState } from 'react';
import GosDraw from '@/public/images/section_2/gos_draw.png';
import BisDraw from '@/public/images/section_2/biss_draw.png';
import PerDraw from '@/public/images/section_2/per_draw.png';
import FizDraw from '@/public/images/section_2/fiz_draw.png';
import Image from 'next/image';
import styles from './SpecialistSearch.module.scss';
import BlackSearchIcon from '@/public/icons/black_search.svg';
import { Container } from '../Container/Container';
import BlackDropDown from '@/public/icons/black_dropdown.svg';

interface Filters {
  location: string;
  type: string;
  category: string;
  spec: string;
}

const SpecialistSearch: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [filters, setFilters] = useState<Filters>({
    location: '',
    type: '',
    category: '',
    spec: '',
  });

  const specialistList = useMemo(
    () => [
      {
        title: 'Госслужащие',
        icon: GosDraw,
      },
      {
        title: 'Бизнесмены',
        icon: BisDraw,
      },
      {
        title: 'Сотрудники',
        icon: PerDraw,
      },
      {
        title: 'Физ.лица',
        icon: FizDraw,
      },
    ],
    [],
  );

  const filtersDropList = useMemo(
    () => [
      {
        title: 'Локация',
        element: <div></div>,
        name: 'location',
      },
      {
        title: 'Тип работы',
        element: <div></div>,
        name: 'type',
      },
      {
        title: 'Категория',
        element: <div></div>,
        name: 'category',
      },
      {
        title: 'Специализация',
        element: <div></div>,
        name: 'spec',
      },
    ],
    [],
  );

  return (
    <Container>
      <div className={styles.specialists}>
        {specialistList.map((specialist, i) => (
          <div key={i} className={styles.specialist}>
            <div className={styles.image}>
              <Image src={specialist.icon} alt="draw" priority />
            </div>
            <p>{specialist.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.searchSection}>
        <div className={styles.search}>
          <div className={styles.searchField}>
            <Image src={BlackSearchIcon} alt="search" />
            <input
              onChange={(event) => setSearchText(event.target.value)}
              type="text"
              value={searchText}
              placeholder="Введите ФИО для получения информации"
            />
          </div>
          <button type="button">Поиск</button>
        </div>
        <div className={styles.filters}>
          {filtersDropList.map((item, i) => (
            <button type="button" key={i} name={item.name}>
              <span>{item.title}</span>
              <Image src={BlackDropDown} alt="dropdown" />
            </button>
          ))}
        </div>
        <div className={styles.searchResult}>Result</div>
      </div>
    </Container>
  );
};

export default SpecialistSearch;
