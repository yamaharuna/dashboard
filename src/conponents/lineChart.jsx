import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        { curve: "linear", data: [1, 5, 2, 6, 3, 9.3] },
        { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
      ]}
      height={300}
    />
  );
}
