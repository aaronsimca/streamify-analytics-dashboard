'use client';

import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';

const KeyMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState([
    { title: 'Total Users', value: '0' },
    { title: 'Active Users', value: '0' },
    { title: 'Total Streams', value: '0' },
    { title: 'Revenue', value: '$0' },
    { title: 'Top Artist', value: 'Loading...' },
  ]);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setMetrics([
        { title: 'Total Users', value: '2,547,893' },
        { title: 'Active Users', value: '1,892,456' },
        { title: 'Total Streams', value: '78,934,567' },
        { title: 'Revenue', value: '$12,456,789' },
        { title: 'Top Artist', value: 'Taylor Swift' },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Key Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} title={metric.title} value={metric.value} />
        ))}
      </div>
    </section>
  );
};

export default KeyMetrics;