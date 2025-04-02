'use client';
import Link from 'next/link';
import React from 'react';

const RootHeader: React.FC = () => {
  return (
    <header>
      <h1>NEW CAFE</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menus">Menus</Link>
          </li>
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default RootHeader;
