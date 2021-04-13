import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  
  <div className="App">
    <Router>
      <Navbar/>
        <Route path='/' exact component={Home}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/contact' exact component={Contact}/>
    </Router>
  </div>
    );
}

export default App;
