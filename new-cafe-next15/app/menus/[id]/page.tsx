import React from 'react';
interface MenuPageProps {
  params: {
    id: string;
  };
}

const MenuPage: React.FC<MenuPageProps> = ({ params }) => {
  const { id } = params;
  return (
    <main>
      상세 페이지: {id}
    </main>
  );
};

export default MenuPage;
