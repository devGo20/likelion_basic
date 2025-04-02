"use client";
import { ReactNode } from 'react';
import RootHeader from './components/RootHeader';
import RootFooter from './components/RootFooter';
type LayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <>
        <RootHeader/>
        {children}
        <RootFooter/>
      </>
      </body>
    </html>
  );
}
