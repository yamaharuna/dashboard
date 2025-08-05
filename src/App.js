import './App.css';
import { useState, useEffect } from 'react';
import LineChart from './conponents/lineChart';
import LineChart2 from './conponents/lineChart2';
import PieChart1 from './conponents/BarChart1';
import PieChart2 from './conponents/pieChart2';
import PieChart3 from './conponents/pieChart3.jsx';
import Pulldown from './conponents/Pulldown';
import Pulldownweek from './conponents/Pulldownweek';

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
      <div className="top-section">
        <div className="left-charts">
          <h2>ユーザー分類別人数の変化</h2>
          <div style={{ width: '600px' }}>
            <LineChart data={data.transformHL} />
          </div>

          <h2>ユーザー分類別課金額の変化</h2>
          <div style={{ width: '600px' }}>
            <LineChart2 data={data.transformHL} />
          </div>
        </div>

        <div className="right-charts">
          <h2>月別課金額</h2>
          <Pulldown onMonthChange={handleMonthChange} />
          <PieChart1 data={data.transformHL} selectedMonth={selectedMonth} />

          <h2>ユーザー別課金額の割合</h2>
          <PieChart2 data={data.transformHL} selectedMonth={selectedMonth} />
        </div>
      </div>

      <h2>離脱の割合</h2>
      <div className="pie-single">
        <Pulldownweek setSelectedWeek={setSelectedWeek} />
        <PieChart3 data={data.transformR} selectedWeek={selectedWeek} />
      </div>
    </div>
  );
}

export default App;