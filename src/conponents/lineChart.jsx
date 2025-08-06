import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart({ data }) {
  // データがなければ表示しない
  if (
    !data ||
    !Array.isArray(data.months) ||
    !Array.isArray(data.series)
  ) {
    return <div>データがありません</div>;
  }

  // ラベルと色の対応
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
  // データの整形
  const ser= data.series.map(s => ({
    label: labelMap[s.name] ?? s.name,
    curve: "linear",
    data: s.data.map(d => d.count),
    color: colorMap[s.name] ?? undefined,
  }));
  return (
    <LineChart
      xAxis={[{ scaleType: 'band', label: '月', data: data.months }]}
      yAxis={[{ scaleType: 'linear', label: 'ユーザー数(人)' }]}
      // series={data.series} // 元のコードではここでseriesを直接使ってß
      series={ser}
      height={300}
      width={600}
      legend={{ hidden: false }}
    />
  );
}

