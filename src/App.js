import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import HomeBar from './Components/HomeBar';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <NavBar/>
        <HomeBar/>
        <Details/>
      </header>
    </div>
  );
}

export default App;
