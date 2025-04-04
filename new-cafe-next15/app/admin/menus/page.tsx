import React from 'react';

export default function AdminMenusPage() {
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
      </section>
    </main>
  );
}
