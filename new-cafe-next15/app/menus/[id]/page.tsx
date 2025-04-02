'use client'; // client component
import { useParams } from 'next/navigation';
import { FC, JSX } from 'react';

const MenuPage: FC = (): JSX.Element => {
  const { id } = useParams();
  return (
    <main>
      상세 페이지: {id}
    </main>
  );
};

export default MenuPage;
