import React from 'react';
import dynamic from 'next/dynamic';
import KeyMetrics from './components/KeyMetrics';

const DataVisualization = dynamic(() => import('./components/DataVisualization'), { ssr: false });
const DataTable = dynamic(() => import('./components/DataTable'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Streamify Analytics Dashboard</h1>
        <KeyMetrics />
        <DataVisualization />
        <DataTable />
      </div>
    </main>
  );
}
