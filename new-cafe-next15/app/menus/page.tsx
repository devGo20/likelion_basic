import Link from 'next/link';
import React, { FC } from 'react';

const MenuPage: FC = () => {
  return (
    <main>
      목록 페이지
      <Link href="/menus/1">상세 페이지</Link>
      <Link href="/menus/2">상세 페이지</Link>
    </main>
  );
};

export default MenuPage;
