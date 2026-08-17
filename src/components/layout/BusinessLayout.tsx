import React, { Suspense } from'react';
import { Outlet } from'react-router-dom';
import Header from'./Header';
import Footer from'./Footer';

const PageFallback = () => (
 <div className="w-full min-h-[70vh] flex items-center justify-center">
 <div className="w-6 h-6 border-2 border-slate-300 border-t-transparent rounded-full animate-spin"></div>
 </div>
);

export default function BusinessLayout() {
 return (
 <>
 <Header />
 <main className="pt-16 lg:pt-20">
 <Suspense fallback={<PageFallback />}>
 <Outlet />
 </Suspense>
 </main>
 <Footer />
 </>
 );
}
