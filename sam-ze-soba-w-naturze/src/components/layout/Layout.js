import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PageTransition from '../UI/PageTransition';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
