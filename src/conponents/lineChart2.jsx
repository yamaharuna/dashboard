import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        { label: 'Super Light',
          curve: "linear",
          data: [1, 5, 2, 6, 3, 9.3],
          color: '#AECBFA', // パステル調の青（最も明るい）
        },
        { label: 'Light',
          curve: "linear",
          data: [6, 3, 7, 9.5, 4, 2],
          color: '#639DFF', // 明るめのブルー
        },
        { label: 'Heavy',
          curve: "linear",
          data: [2, 4, 6, 8, 10, 12],
          color: '#2261E8', // 鮮やかブルー
        },
        { label: 'Super Heavy',
          curve: "linear",
          data: [3, 6, 9, 2, 5, 7],
          color: '#0B1D8B', // 濃くて重厚なネイビー
        },
        
      ]}
      height={300}
      width={600}
      legend={{ hidden: false }}
    />
  );
}

