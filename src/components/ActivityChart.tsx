// src/components/ActivityChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ActivityChartProps {
  data: any[];
}

const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  // Prepare chart data
  const chartData = {
    labels: data.flatMap(d => d.dayWiseActivity.map((activity: any) => activity.date)),
    datasets: data.flatMap(d =>
      d.dayWiseActivity.map((activity: any) => ({
        label: activity.date,
        data: activity.items.children.map((item: any) => item.count),
        backgroundColor: activity.items.children.map((item: any) => item.fillColor),
      }))
    ),
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Developer Activity Chart',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ActivityChart;
