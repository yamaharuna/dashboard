import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


export default function BasicLineChart({ data }) {
  if (
    !data ||
    !Array.isArray(data.months) ||
    !Array.isArray(data.series)
  ) {
    return <div>データがありません</div>;
  }


  const labelMap = {
    super_light: 'Super Light',
    light: 'Light',
    heavy: 'Heavy',
    super_heavy: 'Super Heavy',
  };
  const colorMap = {
    super_light: '#AECBFA',
    light: '#639DFF',
    heavy: '#2261E8',
    super_heavy: '#0B1D8B',
  };
const ser= data.series.map(s => ({
  label: labelMap[s.name] ?? s.name,
  curve: "linear",
  data: s.data.map(d => d.price), // priceを使う
  color: colorMap[s.name] ?? undefined,
}));
console.log("ser",ser);

  return (
    <LineChart
      xAxis={[{ scaleType: 'band', label: '月', data: data.months }]}
      yAxis={[{ scaleType: 'linear', label: '課金額(円)' }]}
      series={ser}
      height={300}
      width={600}
      legend={{ hidden: false }}
    />
  );
}

