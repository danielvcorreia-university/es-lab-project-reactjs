import './App.css';
import PtCitiesTable from './components/PtCitiesTable';
import HistoricLisbonTemps from './components/HistoricLisbonTemps';
import HeroHottestCity from './components/HeroHottestCity';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroHottestCity />
      <div className="row">
        <div className="col">
        </div>
        <div className="col-6">
          <PtCitiesTable />
          <HistoricLisbonTemps />
        </div>
        <div className="col">
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
