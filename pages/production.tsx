import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import GlobalControls from '../components/GlobalControls';
import ProductionCanvasUI from '../components/ProductionCanvasUI';

const ProductionPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Production Process Design | Production Process App</title>
        <meta name="description" content="Design your production process with our interactive diagram editor" />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* Global Header */}
        <Header />
        {/* Global Controls */}
        <div className="mt-16 p-2">
          <GlobalControls />
        </div>
        {/* Main Workspace */}
        <div className="flex flex-1">
          <main className="flex-1 p-4 max-w-screen-xl mx-auto min-h-[600px]">
            <ProductionCanvasUI />
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductionPage;