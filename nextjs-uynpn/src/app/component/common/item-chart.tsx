'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
  labels: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01'],
  datasets: [
    {
      label: 'Số mũi đã tiêm',
      data: [1000, 1200, 1500, 1300, 1700, 2000, 2300],
      fill: false,
      backgroundColor: 'red',
      borderColor: 'rgba(255, 0, 0, 0.2)',
      pointBackgroundColor: 'red',
      pointBorderColor: 'red',
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ],
};


const ItemChart: React.FC = () => {
  return (
    <div style={{ height: '510', width: '1336',  display: 'flex', justifyContent: 'center', border: '1px solid red'}}>
      <Line data={chartData} />
    </div>
  );
};

export default ItemChart;
