import './App.css';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Tickets from './components/Tickets/TicketsWrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
      <Filter />
        <div className="main">
          <Tickets />
        </div>
      </div>
    </div>
  );
}

export default App;
