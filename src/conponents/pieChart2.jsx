import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie({ data, selectedMonth }) {
  if (!data) {
    return <div>データを読み込み中...</div>;
  }

  if (!selectedMonth) {
    return <div>月を選択してください</div>;
  }

  const monthData = data[selectedMonth];

  if (!monthData) {
    return <div>選択された月のデータが見つかりません: {selectedMonth}</div>;
  }

  const pieData = [
    { id: 0, value: monthData.super_heavy.total, label: 'Super Heavy', color: '#ff4444' },
    { id: 1, value: monthData.heavy.total, label: 'Heavy', color: '#ff8800' },
    { id: 2, value: monthData.light.total, label: 'Light', color: '#00aa00' },
    { id: 3, value: monthData.super_light.total, label: 'Super Light', color: '#0088ff' },
  ];

  return (
    <PieChart
      series={[
        {
          data: pieData,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      width={300}
      height={300}
    />
  );
}