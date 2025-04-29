'use client';
import { MenuDto } from '@/application/usecases/admin/menu/dto/MenuDto';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
export default function AdminMenusPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get('p') || '1';
  const [menus, setMenus] = useState<MenuDto[]>([]);

  useEffect(
    () => {
      const fetchMenus = async () => {
        try {
          const response = await fetch(`/api/admin/menus?p=${page}`);
          const data = await response.json();
          setMenus(data.menus);
        } catch (error) {
          console.error('Failed to fetch menus:', error);
        }
      };

      fetchMenus();
    },
    [page]
  );
  return (
    <main>
      <section>
        <header className="n-bar">
          <h1 className="n-heading:5">제품관리 / 메뉴관리</h1>
          <div className="ml:3 d:flex">
            <button className="n-icon n-icon:add n-btn n-btn:rounded n-btn-size:small">
              추가
            </button>
          </div>
        </header>
        <table className="n-table n-table:expandable">
          <thead>
            <tr>
              <th className="w:1">번호</th>
              <th className="w:0 overflow:hidden">사진</th>
              <th>한글명</th>
              <th className="w:0 md:w:2 n-heading-truncate">영문명</th>
              <th className="w:3">비고</th>
            </tr>
          </thead>
          <tbody>
            {menus.map(menu =>
              <tr key={menu.id} className="vertical-align:middle">
                <td>
                  {menu.id}
                </td>
                <td className="w:0 overflow:hidden">
                  {/* <Image src={''} width={50} height={50} alt={menu.korName} /> */}
                </td>
                <td className="text-align:start n-heading-truncate">
                  <a href={`detail/${menu.id}`}>
                    {menu.korName}
                  </a>
                </td>
                <td className="w:0 md:w:2 n-heading-truncate">
                  {menu.engName}
                </td>
                <td>
                  <span className="d:inline-flex align-items:center" />
                  <label className="n-icon n-icon:arrow_drop_down n-icon-size:2 n-btn mr:2">
                    <input type="checkbox" className="d:none n-" />
                    <span>상세보기</span>
                  </label>
                  <Link
                    className="n-icon n-icon:edit_square n-icon-color:base-6"
                    href={`detail/${menu.id}`}
                  >
                    수정
                  </Link>
                  <form className="d:flex ai:center">
                    <input type="hidden" name="id" value={menu.id} />
                    <button
                      className="n-icon n-icon:delete n-icon-color:base-6"
                      type="submit"
                    >
                      삭제
                    </button>
                  </form>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="mt:4 text-align:center">
          <ul className="n-bar">
            <li>
              <a className="n-btn active" href="">
          1
              </a>
            </li>
            <li>
              <a className="n-btn" href="">
          2
              </a>
            </li>
            <li>
              <a className="n-btn" href="">
          3
              </a>
            </li>
            <li>
              <a className="n-btn" href="">
          4
              </a>
            </li>
            <li>
              <a className="n-btn" href="">
          5
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
