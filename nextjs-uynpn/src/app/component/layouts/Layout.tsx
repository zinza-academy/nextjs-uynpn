import React, { ReactNode } from 'react';
import Header from '@/app/component/layouts/header/page';
import Footer from '@/app/component/layouts/footer/page';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
