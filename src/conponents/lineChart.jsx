import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart({ data }) {
  if (!data) {
    return <div>データを読み込み中...</div>;
  }

  // 月順にソート
  const sortedMonths = Object.keys(data).sort();

  // 各カテゴリの count データ抽出
  const superHeavyData = sortedMonths.map(month => data[month].super_heavy.count);
  const heavyData = sortedMonths.map(month => data[month].heavy.count);
  const lightData = sortedMonths.map(month => data[month].light.count);
  const superLightData = sortedMonths.map(month => data[month].super_light.count);

  // x軸ラベルを整形
  const xAxisData = sortedMonths.map(month => {
    const [year, monthNum] = month.split('-');
    return `${year}年${monthNum}月`;
  });

  return (
    <LineChart
      xAxis={[{ 
        data: xAxisData,
        scaleType: 'band'
      }]}
      series={[
        { 
          curve: "linear", 
          data: superHeavyData, 
          label: 'Super Heavy',
          color: '#ff4444'
        },
        { 
          curve: "linear", 
          data: heavyData, 
          label: 'Heavy',
          color: '#ff8800'
        },
        { 
          curve: "linear", 
          data: lightData, 
          label: 'Light',
          color: '#00aa00'
        },
        { 
          curve: "linear", 
          data: superLightData, 
          label: 'Super Light',
          color: '#0088ff'
        },
      ]}
      height={400}
      width={800}
    />
  );
}