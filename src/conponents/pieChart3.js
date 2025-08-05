function PieChart3({ data, selectedWeek }) {
  if (!data || !selectedWeek || !data[selectedWeek]) {
    return <div>データがありません</div>;
  }

  const weekData = data[selectedWeek];
  // weekData = {1: 29, 2: 36, 3: 25, 4: 20} のような形

  // ここからweekDataをグラフ用データに変換して描画
  // 例:
  const chartData = Object.entries(weekData).map(([key, value]) => ({
    name: `${key}ユーザー`,
    value: value
  }));

  // ...グラフ描画処理...
}