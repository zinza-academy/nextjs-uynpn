'use client';

import Link from 'next/link';
import React, { Suspense } from 'react';
import Header from './component/layouts/header/page';

const LazyHomePage = React.lazy(() => import('../app/dashboard/homepage/page'));

export default function Home() {
  return (
    <main>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <LazyHomePage />
      </Suspense>
    </main>
  );
}
