import React, { FC, JSX } from 'react';
type MenuPageProps = {
  params: {
    id: string;
  };
};
// FC<받는 형식> (): 반환 타입
const MenuPage: FC<MenuPageProps> = async ({
  params
}): Promise<JSX.Element> => {
  const { id } = params;
  const response = await fetch(`https://next15-ts-ssr.new-cafe.com/api/menus`, {
    cache: 'no-store'
  });
  const data = await response.json();
  console.log('menuData', data);
  return (
    <main>
      <h2>
        상세 페이지: {id}
      </h2>
      <div>
        {data.menus[1].korName}
      </div>
    </main>
  );
};

export default MenuPage;
