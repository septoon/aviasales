import './App.css';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import TicketsContainer from './components/Tickets/TicketsContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
      <Filter />
        <div className="main">
          <TicketsContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
