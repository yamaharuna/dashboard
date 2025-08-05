import './App.css';
import { useState, useEffect } from 'react';
import LineChart from './conponents/lineChart.jsx';
import LineChart2 from './conponents/lineChart2.jsx';
import PieChart1 from './conponents/BarChart1.jsx';
import PieChart2 from './conponents/pieChart2.jsx';
import PieChart3 from './conponents/pieChart3.jsx';
import Pulldown from './conponents/Pulldown.jsx';
import Pulldownweek from './conponents/Pulldownweek.jsx';
import TextBox from './conponents/text.jsx';


function App() {
  const [data, setData] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedWeek, setSelectedWeek] = useState('2week');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function executeOpenAPI() {
    const url = "https://fc67f7616da7.ngrok-free.app/open";
    console.log(`Executing request to: ${url}`);
    try {
      const response = await fetch(url, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        }
      });
      const responseData = await response.text();
      console.log("Status Code:", response.status);
      console.log("Headers:", Object.fromEntries(response.headers));
      console.log("Response Body:", responseData);

      const parsed = JSON.parse(responseData);
      setData(parsed.data);
      setLoading(false);
    } catch (err) {
      console.error("Request Error:", err.message);
      setError(err.message);
      setLoading(false);
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

  return (
    <div className="App">
      {/* === セクション1 === */}
      <div className="section-wrapper">
        <h2>人数の推移と分布</h2>
        <div className="section">
          <div className="chart-block">
            <h3>ユーザー数の推移</h3>
            <div style={{ width: '400px' }}>
              <LineChart data={data.transformHL} />
            </div>
          </div>

          <div className="chart-block">
            <h3>月別課金額</h3>
            <Pulldown onMonthChange={handleMonthChange} />
            <PieChart1 data={data.transformHL} selectedMonth={selectedMonth} />
          </div>
        </div>
      </div>

      {/* === セクション2 === */}
      <div className="section-wrapper">
        <h2>課金額の推移と分布</h2>
        <div className="section">
          <div className="chart-block">
            <h3>ユーザー分類別課金額の変化</h3>
            <div style={{ width: '400px' }}>
              <LineChart2 data={data.transformHL} />
            </div>
          </div>

          <div className="chart-block">
            <h3>ユーザー別課金額の割合</h3>
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
        <TextBox text="ここにマークダウン形式のテキストを入力してください。" />
      </div>
    </div>
  );
}

export default App;