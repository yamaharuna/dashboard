import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function PieChart3({ data, selectedWeek }) {
  const weekData = data[selectedWeek];
  if (!weekData) return <div>この週のデータがありません</div>;

  let labels = [];
  if (selectedWeek === '2week') {
    labels = ['0~2weeks', '2weeks~1month', '1month~1.5month', '1.5month~2month'];
  } else if (selectedWeek === '4week') {
    labels = ['0~1month', '1month~2month', '2month~3month', '3~4month'];
  } else if (selectedWeek === '8week') {
    labels = ['0~2month', '2month~3month', '3month~4month', '4month~5month'];
  } else if (selectedWeek === '12week') {
    labels = ['0~3month', '3month~4month', '4month~5month', '5month~6month'];
  } else {
    labels = Object.keys(weekData).map((key) => `カテゴリ ${key}`);
  }

  const colorMap = {
    '0': '#4A90E2',
    '1': '#0052CC',
    '2': '#50E3C2',
    '3': '#003f5c',
  };

  const pieData = Object.entries(weekData).map(([key, value], idx) => ({
    id: key,
    label: labels[idx] || `カテゴリ ${key}`,
    value,
    color: colorMap[idx] || '#888888',
  }));

  if (pieData.length === 0) return <div>この週のデータがありません</div>;

  return (
    <PieChart
      series={[{ data: pieData }]}
      width={400}
      height={200}
    />
  );
}
