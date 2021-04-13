import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Helmet from 'react-helmet';
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
      <Helmet>
        <title>
          Base page title by Helmet
        </title>
        <meta
        name='description'
        content='Composant super parent par Helmet'
        />
      </Helmet>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/' component={()=> <div>Oops, cette page n'existe pas...</div>}/>
      </Switch>
    </Router>
  </div>
    );
}

export default App;
