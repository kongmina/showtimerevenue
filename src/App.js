import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

// import Header from './components/header/header.component'

import './App.css';

import Home from './pages/home/home.component';
import Header from './components/header/header.component';
import About from './pages/about/about.component';
import Contact from './pages/contact/contact.component';
import CaseStudy from './pages/case-study/case-study.component';
import Footer from './components/footer/footer.component';
import Terms from './pages/terms/terms.component';
import Privacy from './pages/privacy/privacy.component';
import BlogPage from './pages/blog/blog.component';

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


            <Route path='/blog' component={BlogPage}/>
            <Route path='/terms-of-service' component={Terms}/>
            <Route path='/privacy-policy' component={Privacy}/>

          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
