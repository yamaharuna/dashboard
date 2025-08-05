import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBar() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: 'band',
          data: ['〜1,000円', '1,001〜3,000円', '3,001〜5,000円', '5,001〜10,000円', '10,000円〜'],
        },
      ]}
      series={[
        {
          data: [50, 80, 45, 20, 5],
          label: 'ユーザー数',
        },
      ]}
      width={400}
      height={300}
    />
  );
}
