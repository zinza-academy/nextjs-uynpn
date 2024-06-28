'use client';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

import Link from 'next/link';
import React, { Suspense } from 'react';

const LazyHomePage = React.lazy(() => import('../app/dashboard/homepage/page'));

export default function Home() {
  return (
    <main>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <LazyHomePage />
      </Suspense>

      <Footer />
    </main>
  );
}
