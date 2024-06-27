'use client';

import Link from 'next/link';
import React, { Suspense } from 'react';

const LazyHomePage = React.lazy(() => import('../app/dashboard/homepage/page'));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHomePage />
      </Suspense>
    </main>
  );
}
