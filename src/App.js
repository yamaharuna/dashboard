import './App.css';
import LineChart from './conponents/lineChart';
import PieChart1 from './conponents/pieChart1';
import PieChart2 from './conponents/pieChart2';
import PieChart3 from './conponents/pieChart3';
import Pulldown from './conponents/Pulldown';


function App() {
  return (
    <div className="App">
      <h2>Line Chart</h2>
      <LineChart />

     

<Pulldown />
<div className="pie-row">
<h2>Pie Charts</h2>
  <PieChart1 />
  <h2>Pie Charts</h2>
  <PieChart2 />
  </div>
  <div className="pie-single">
  <h2>Pie Charts</h2>
  <PieChart3 />
  </div>
  
</div>
  );
}

export default App;
