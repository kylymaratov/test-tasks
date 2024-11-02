// src/app/layout.tsx

import { ReactNode } from 'react';
import '@/styles/globals.css';
import { Metadata } from 'next';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'Matrix',
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
