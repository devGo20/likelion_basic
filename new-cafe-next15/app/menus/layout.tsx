import { ReactNode } from 'react';
import Basket from './components/Basket';
type LayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <>
        {children}
        <Basket/>
      </>
      </body>
    </html>
  );
}
