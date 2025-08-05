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

  const labels = ['Super Light', 'Light', 'Heavy', 'Super Heavy'];

  // 各シリーズはx軸のラベルに合わせて値を持つ。バー1本だけの値を持たせるために他は0にする
  const series = [
    {
      data: [monthData.super_light.count, 0, 0, 0],
      label: 'Super Light',
      color: '#4A90E2', // 明るめのブルー
    },
    {
      data: [0, monthData.light.count, 0, 0],
      label: 'Light',
      color: '#0052CC', // 濃い青
    },
    {
      data: [0, 0, monthData.heavy.count, 0],
      label: 'Heavy',
      color: '#50E3C2', // 青緑に近い
    },
    {
      data: [0, 0, 0, monthData.super_heavy.count],
      label: 'Super Heavy',
      color: '#003f5c', // 深いネイビーブルー
    },
  ];

  return (
    <BarChart
      xAxis={[
        {
          scaleType: 'band',
          data: labels,
        },
      ]}
      series={series}
      width={500}
      height={300}
    />
  );
}
