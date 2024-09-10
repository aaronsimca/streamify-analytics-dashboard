'use client';

import React, { useState, useEffect } from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables, ChartOptions } from 'chart.js';

ChartJS.register(...registerables);

const DataVisualization: React.FC = () => {
  const [chartData, setChartData] = useState({
    userGrowth: {
      labels: [] as string[],
      datasets: [{
        label: 'User Growth',
        data: [] as number[],
        borderColor: '',
        backgroundColor: '',
        tension: 0,
        fill: false,
      }],
    },
    revenueDistribution: {
      labels: [] as string[],
      datasets: [{
        data: [] as number[],
        backgroundColor: [] as string[],
      }],
    },
    topStreamedSongs: {
      labels: [] as string[],
      datasets: [{
        label: 'Streams',
        data: [] as number[],
        backgroundColor: '',
      }],
    },
  });

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setChartData({
        userGrowth: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'User Growth',
            data: [1500000, 1750000, 2000000, 2250000, 2400000, 2547893],
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            tension: 0.1,
            fill: true,
          }],
        },
        revenueDistribution: {
          labels: ['Subscriptions', 'Ads', 'Merchandise'],
          datasets: [{
            data: [9345591, 2491358, 619840],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          }],
        },
        topStreamedSongs: {
          labels: ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5'],
          datasets: [{
            label: 'Streams',
            data: [5000000, 4500000, 4000000, 3500000, 3000000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          }],
        },
      });
    }, 1000);
  }, []);

  const chartOptions: ChartOptions<'line' | 'pie' | 'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
    },
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-white">Data Visualization</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-white">User Growth</h3>
          <Line data={chartData.userGrowth} options={chartOptions as ChartOptions<'line'>} />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-white">Revenue Distribution</h3>
          <Pie data={chartData.revenueDistribution} options={chartOptions as ChartOptions<'pie'>} />
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-white">Top 5 Streamed Songs</h3>
          <Bar data={chartData.topStreamedSongs} options={chartOptions as ChartOptions<'bar'>} />
        </div>
      </div>
    </section>
  );
};

export default DataVisualization;