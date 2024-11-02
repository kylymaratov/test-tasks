import { useMemo } from 'react';

import News1Draw from '@/public/images/section_6/news_1_draw.png';
import News2Draw from '@/public/images/section_6/news_2_draw.png';
import News3Draw from '@/public/images/section_6/news_3_draw.png';
import News4Draw from '@/public/images/section_6/news_4_draw.png';
import News5Draw from '@/public/images/section_6/news_5_draw.jpg';

export const UseConent = () => {
  const news = useMemo(
    () => [
      {
        title: '5 Principles Of Effective Web Design',
        subTitle: 'Sapiente amet molestias cum fugiat qui...',
        img: News1Draw,
        type: 'Бизнес',
      },
      {
        title: '5 Principles Of Effective Web Design',
        img: News2Draw,
        type: 'Бизнес',
      },
      {
        title: '5 Principles Of Effective Web Design',
        subTitle: 'Sapiente amet molestias cum fugiat qui...',
        img: News3Draw,
        type: 'Бизнес',
      },
      {
        title: '5 Principles Of Effective Web Design',
        img: News4Draw,
        type: 'Бизнес',
      },
      {
        title: 'Join our community',
        subTitle:
          'Get support, get involved, and join our community of 10,000+ Clarity developers—it all happens on Discord.',
        img: News5Draw,
        type: 'Бизнес',
        button: (fn: () => void) => fn(),
        buttonText: 'Читать',
      },
    ],
    [],
  );

  return { news };
};
