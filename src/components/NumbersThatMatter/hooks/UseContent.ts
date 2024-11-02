import { useMemo } from 'react';
import procent1Draw from '@/public/images/section_4/procent_1_draw.svg';
import procent2Draw from '@/public/images/section_4/procent_2_draw.svg';
import procent3Draw from '@/public/images/section_4/procent_3_draw.svg';
import procent4Draw from '@/public/images/section_4/procent_4_draw.svg';
import procent5Draw from '@/public/images/section_4/procent_5_draw.svg';
//
import card1Draw from '@/public/images/section_4/card_1_draw.svg';
import card2Draw from '@/public/images/section_4/card_2_draw.svg';
import card3Draw from '@/public/images/section_4/card_3_draw.svg';
import card4Draw from '@/public/images/section_4/card_4_draw.svg';

export const UseContent = () => {
  const statistics = useMemo(
    () => [
      {
        img: procent1Draw,
        procent: 87,
        text: 'Топ-менеджеров более инициативны и могут принимать важные решения самостоятельно;',
      },
      {
        img: procent2Draw,
        procent: 69.22,
        text: 'Всех кандидатов честны в своей работе; ',
      },
      {
        img: procent3Draw,
        procent: 83.33,
        text: 'Крупнейших компаний Кыргызстана проводят рекрутинг топ-менеджеров на нашей веб платформе;',
      },
      {
        img: procent4Draw,
        procent: 100,
        text: 'HR специалистов уровень EQ кандидатов на нашей платформе;',
      },
      {
        img: procent5Draw,
        procent: 92,
        text: 'Наших экспертов имеют IQ более 120 баллов',
      },
    ],
    [],
  );

  const cardStatistics = useMemo(
    () => [
      {
        title: '+10 000',
        icon: card1Draw,
        text: 'Резюме высококвалифицированных экспертов в нашей постоянно - обновляющейся базе ',
      },
      {
        title: '475+',
        icon: card2Draw,
        text: 'Клиентов из различных отраслей бизнеса ',
      },
      {
        title: 'ТОП-1',
        icon: card3Draw,
        text: 'Лучшая HRTech компания Кыргызстана 2023 годаs ',
      },
      {
        title: 'ТОП-1',
        icon: card4Draw,
        text: 'Входим в ТОП-3 крупнейших HRTech поставщиков Кыргызстана. ',
      },
    ],
    [],
  );

  return { statistics, cardStatistics };
};
