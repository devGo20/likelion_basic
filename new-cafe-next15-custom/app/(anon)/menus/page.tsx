'use client';
import React, { FC, JSX } from 'react';

const MenuPage: FC = (): JSX.Element => {
  return (
    <main>
      목록 페이지
      {/* {menus.map(menu =>
        <Link key={menu.id} href={`/menus/${menu.id}`}>
          {menu.korName}
        </Link>
      )} */}
    </main>
  );
};

export default MenuPage;
