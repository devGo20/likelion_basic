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
  const fetchMenu = async (id: string) => {
    const response = await fetch(
      `https://next15-ts-ssr.new-cafe.com/api/menus/${id}`,
      {
        cache: 'no-store'
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };
  const menuData = await fetchMenu(id);
  return (
    <main>
      상세 페이지: {menuData.id}
    </main>
  );
};

export default MenuPage;
