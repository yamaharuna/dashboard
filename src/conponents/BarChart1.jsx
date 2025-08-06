import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBar({ data, selectedMonth }) {
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

  const chartData = [
    
   
    
    { label: 'Super Light', count: monthData.super_light.count },
    { label: 'Light', count: monthData.light.count },
    { label: 'Heavy', count: monthData.heavy.count },
    { label: 'Super Heavy', count: monthData.super_heavy.count }
  ];

  const xAxisData = chartData.map(item => item.label);
  const seriesData = chartData.map(item => item.count);

  return (
    <BarChart
      xAxis={[
        {
          scaleType: 'band',
          data: xAxisData,
        },
      ]}
      series={[
        {
          data: seriesData,
          label: 'ユーザー数',
          color: '#0017C1',
        },
      ]}
      width={500}
      height={300}
    />
  );
}
