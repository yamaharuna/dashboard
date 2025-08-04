import './App.css';
import LineChart from './conponents/lineChart';
import PieChart from './conponents/pieChart';

function App() {
  return (
    <div className="App">
      <h2>Line Chart</h2>
      <LineChart />
      <h2>Pie Chart</h2>
      <PieChart />
    </div>
  );
}

export default App;
