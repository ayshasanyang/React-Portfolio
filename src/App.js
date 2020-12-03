import React, { Component } from 'react';
/* eslint-disable no-undef */

import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Header from './components/header';
import HomePage from './components/HomePage';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/Footer';
import './App.css';





class App extends Component {
    render() {
        return (


<div className="App">
<Router>
  
<Header/>

<Switch>
<Route exact path='/' component={HomePage} />
<Route exact path='/portfolio' component={Portfolio} />
<Route path='/about' component={About} />
<Route path='/contact' component={Contact} />

</Switch>
<Footer/>
</Router>
</div>
)
    }
}
export default App;