'use client';
import { ReactNode } from 'react';
import RootHeader from './components/RootHeader';
type LayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: LayoutProps) {
  return (
    <div>
      <RootHeader />
      <main>
        {children}
      </main>
    </div>
  );
}
