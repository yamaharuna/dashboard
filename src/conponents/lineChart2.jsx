import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          curve: "linear",
          data: [1, 5, 2, 6, 3, 9.3],
          color: '#4A90E2', // 明るめのブルー
        },
        {
          curve: "linear",
          data: [6, 3, 7, 9.5, 4, 2],
          color: '#0052CC', // 濃い青
        },
        {
          curve: "linear",
          data: [2, 4, 6, 8, 10, 12],
          color: '#50E3C2', // 青緑に近い（アクセント）
        },
        {
          curve: "linear",
          data: [3, 6, 9, 2, 5, 7],
          color: '#003f5c', // 深いネイビーブルー
        },
      ]}
      height={300}
    />
  );
}

