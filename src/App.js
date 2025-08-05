import './App.css';
import LineChart from './conponents/lineChart';
import PieChart1 from './conponents/pieChart1';
import PieChart2 from './conponents/pieChart2';
import PieChart3 from './conponents/pieChart3';
import Pulldown from './conponents/Pulldown';
import Pulldownweek from './conponents/Pulldownweek';
import LineChart2 from './conponents/lineChart2';

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <div className="left-charts">
          <h2>ユーザー分類別人数の変化</h2>
          <div style={{ width: '600px' }}>
            <LineChart />
          </div>
          <h2>ユーザー分類別課金額の変化</h2>
          <div style={{ width: '600px' }}>
            <LineChart2 />
          </div>
        </div>

        <div className="right-charts">
          <h2>月別課金額</h2>
          <Pulldown />
          <PieChart1 />

          <h2>ユーザー別課金額の割合</h2>
      <PieChart2 />
        </div>
      </div>

      

      <h2>離脱の割合</h2>
      <div className="pie-single">
        <Pulldownweek />
        <PieChart3 />
      </div>
    </div>
  );
}

export default App;
