import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
