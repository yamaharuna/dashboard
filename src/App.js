import './App.css';
import LineChart from './conponents/lineChart';
import PieChart1 from './conponents/pieChart1';
import PieChart2 from './conponents/pieChart2';
import PieChart3 from './conponents/pieChart3';
import Pulldown from './conponents/Pulldown';
import Pulldownweek from './conponents/Pulldownweek';

function App() {
  return (
    <div className="App">
      <h2>ユーザー別課金額の変化</h2>
      <LineChart />

      <Pulldown />

      
      <div className="pie-row">
      <h2>月別課金額の割合</h2>
        <PieChart1 />
      <h2>ユーザー別課金額の割合</h2>
        <PieChart2 />
        
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
