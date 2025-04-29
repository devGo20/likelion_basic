import { JSX } from 'react';
import AdminHeader from './components/AdminHeader';
import AdminFooter from './components/AdminFooter';
import AdminAside from './components/AdminAside';

const AdminLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="n-layout n-aside-size:full1 n-aside-float1 n-aside-pos:right1">
      <AdminHeader />
      <div className="xl:w:xlarge1">
        <AdminAside />
        {children}
      </div>
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
