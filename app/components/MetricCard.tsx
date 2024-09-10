import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-300">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
};

export default MetricCard;