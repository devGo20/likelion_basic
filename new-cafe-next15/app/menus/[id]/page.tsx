import React, { FC, JSX } from 'react';
type MenuPageProps = {
  params: {
    id: string;
  };
};
// FC<받는 형식> (): 반환 타입
const MenuPage: FC<MenuPageProps> = ({ params }): JSX.Element => {
  const { id } = params;
  return (
    <main>
      상세 페이지: {id}
    </main>
  );
};

export default MenuPage;
