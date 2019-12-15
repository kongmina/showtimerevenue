import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// import Header from './components/header/header.component'

import './App.css';
import Home from './pages/home/home.component';
import Header from './components/header/header.component';
import About from './pages/about/about.component';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <BrowserRouter>
          {/* <Switch> */}
            <Route exact path='/' Component={Home}/>
            <Route path='/about' Component={About}/>
            {/* <Route path='/contact' Component={Contact}/> */}

          {/* </Switch> */}
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
