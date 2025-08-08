import './App.css';
import { useState, useEffect } from 'react';
import LineChart from './conponents/lineChart.jsx';
import LineChart2 from './conponents/lineChart2.jsx';
import BarChart1 from './conponents/BarChart1.jsx';
import PieChart2 from './conponents/pieChart2.jsx';
import PieChart3 from './conponents/pieChart3.jsx';
import Pulldown from './conponents/Pulldown.jsx';
import Pulldownweek from './conponents/Pulldownweek.jsx';
import TextBox from './conponents/text.jsx';
import Orders from "./orders.json"
function App() {
  const [data, setData] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('2week');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adviceText, setAdviceText] = useState("読み込み中...");

async function executeOpenAPI() {
  try {
    // 'Orders' is already a JavaScript object, no need to parse it.
    const responseData = Orders;
    console.log("Response Body:", responseData);

    // Use 'responseData' directly.
    setData(responseData.data);
    setLoading(false);

    if (responseData.data && responseData.data.ai_advice && responseData.data.ai_advice.advice) {
      // Use a regex to replace *all* newlines, not just the first one.
      setAdviceText(responseData.data.ai_advice.advice.replace("\n\n", '  '));
    }
  } catch (err) { // This is the correct syntax for a catch block.
    setError(err);
    setLoading(false); // Also good to stop loading on error.
  }
}

  useEffect(() => {
    executeOpenAPI();
  }, []);

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  if (error) {
    return (
      <div className="App">
        <div style={{ color: 'red', padding: '20px' }}>
          エラー: {error}
          <button 
            onClick={executeOpenAPI} 
            style={{ marginLeft: '10px', padding: '5px 10px' }}
          >
            再試行
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="App">
        <div style={{ padding: '20px', textAlign: 'center' }}>
          データを読み込み中...
        </div>
      </div>
    );
  }

  // transformHLからLineChart1用データを生成
  function getLineChart1Data(transformHL) {
    if (!transformHL) return [];
    const userTypes = ['super_heavy', 'heavy', 'light', 'super_light'];
    // 年月順にソート
    const months = Object.keys(transformHL).sort();
    // 各分類ごとに系列データを作成
    const series = userTypes.map(type => ({
      name: type,
      data: months.map(month => ({
        month,
        count: transformHL[month][type]?.count ?? 0
      }))
    }));
    return { months, series };
  }

  // transformHLからLineChart2用データを生成（priceを使う）
  function getLineChart2Data(transformHL) {
    if (!transformHL) return { months: [], series: [] };
    const userTypes = ['super_heavy', 'heavy', 'light', 'super_light'];
    const months = Object.keys(transformHL).sort();
    const series = userTypes.map(type => ({
      name: type,
      data: months.map(month => ({
        month,
        price: transformHL[month][type]?.total ?? 0   // ← priceとしてtotalを使う
      }))
    }));
    return { months, series };
  }

  return (
    <div className="App">
      {/* === セクション1 === */}
      <div className="section-wrapper">
        <h2>人数の推移と分布</h2>
        <div className="section">
          <div className="chart-block">
            <h3>ユーザー数の推移</h3>
            <div style={{ width: '600px' }}>
              <LineChart data={getLineChart1Data(data.transformHL)} />
            </div>
          </div>

          <div className="chart-block">
            <h3>月間課金額別人数</h3>
            <Pulldown onMonthChange={handleMonthChange} selectedMonth={selectedMonth} />
            <BarChart1 data={data.transformHL} selectedMonth={selectedMonth} />
          </div>
        </div>
      </div>

      {/* === セクション2 === */}
      <div className="section-wrapper">
        <h2>課金額の推移と分布</h2>
        <div className="section">
          <div className="chart-block">
            <h3>ユーザー分類別課金額の変化</h3>
            <div style={{ width: '600px' }}>
              <LineChart2 data={getLineChart2Data(data.transformHL)} />
            </div>
          </div>

          <div className="chart-block">

            <h3>ユーザー別課金額の割合</h3>
            <Pulldown onMonthChange={handleMonthChange} selectedMonth={selectedMonth} />

            
            <PieChart2 data={data.transformHL} selectedMonth={selectedMonth} />
          </div>
        </div>
      </div>

      {/* === セクション3 === */}
      <div className="section-wrapper">
        <h2>最終課金日からの期間割合</h2>
        <div className="section">
          <Pulldownweek setSelectedWeek={setSelectedWeek} />
          <div className="pie-single">
            <PieChart3 data={data.transformR} selectedWeek={selectedWeek} />
          </div>
        </div>
      </div>

      {/* === テキストセクション === */}
      <div className="section text-section">
        <TextBox text={adviceText} />
      </div>
    </div>
  );
}

export default App;