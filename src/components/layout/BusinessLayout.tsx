import React from 'react';
import { Outlet } from 'react-router-dom';
import BusinessHeader from './BusinessHeader';
import Footer from './Footer';

export default function BusinessLayout() {
  return (
    <>
      <BusinessHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
