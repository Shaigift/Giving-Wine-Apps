import React, { Component } from 'react';
import './App.css';
import WineMakers from './WineMakers';
import Catalog from './Catalog';
import ShippingMethods from './ShippingMethods';
import { Switch, Route, Link } from 'react-router-dom';
import About from './About';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Giving Wines</h1>
          <nav>
            <ul>
              <li><Link to='/'>Catalog</Link></li>  
              <li><Link to='/winemakers'>WineMakers</Link></li>  
              <li><Link to='/shippingMethods'>Shipping Methods</Link></li>   
              <li><Link to='/about'>About</Link></li>          
            </ul>
          </nav>
      </header>
		<Switch>
       <Route exact path='/' component={Catalog}/>
       <Route path='/winemakers' component={WineMakers}/>
           <Route path='/shippingMethods' component={ShippingMethods}/>
           <Route path='/about' component={About}/>
		</Switch>
      </div>
    );
  }
}

export default App;
