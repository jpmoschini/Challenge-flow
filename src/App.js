import './App.css';
import Homepage from './components/Homepage/Homepage';
import CityState from './context/cityState';

function App() {
  return (
    <CityState>
      <Homepage />
    </CityState>
  );
}

export default App;
