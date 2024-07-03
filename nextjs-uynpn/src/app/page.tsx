"use client";

import Link from "next/link";
import React, { Suspense } from "react";
import Layout from "../app/component/layouts/Layout";

const LazyHomePage = React.lazy(() => import("../app/dashboard/homepage/page"));

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHomePage />
      </Suspense>
    </Layout>
  );
}
