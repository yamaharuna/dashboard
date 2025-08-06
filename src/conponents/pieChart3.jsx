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
    labels = ['0~2month', '2month~4month', '4month~6month', '6month~8month'];
  } else if (selectedWeek === '12week') {
    labels = ['0~3month', '3month~6month', '6month~9month', '9month~1year'];
  } else {
    labels = Object.keys(weekData).map((key) => `カテゴリ ${key}`);
  }

  const colorMap = {
    '0': '#AECBFA',
    '1': '#639DFF',
    '2': '#2261E8',
    '3': '#0B1D8B',
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
      width={240}
      height={240}
    />
  );
}
