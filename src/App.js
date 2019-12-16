import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom'

// import Header from './components/header/header.component'

import './App.css';

import Home from './pages/home/home.component';
import Header from './components/header/header.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import CaseStudy from './pages/case-study/case-study.component';

class App extends React.Component {
  render(){
    return (
      <div>
        
        <BrowserRouter>
        <Header/>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/case-study' component={CaseStudy}/>

          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
