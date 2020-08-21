import React ,{Component,Fragment} from 'react';
import {Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Cse from './components/Cse'
import It from './components/It'
import Ece from './components/Ece'
import Eee from './components/Eee'
import Ce from './components/Ce'
import Me from './components/Me'
import Credit from './components/Credit'


class App extends Component{
  render(){
    return(
      <Fragment>
      <Navbar/>
      <div className="container">
      <Route exact path = '/' component = {Home}/>
      <Route exact path = '/cse' component = {Cse}/>
      <Route exact path = '/it' component = {It}/>
      <Route exact path = '/ece' component = {Ece}/>
      <Route exact path = '/eee' component = {Eee}/>
      <Route exact path = '/civil' component = {Ce}/>
      <Route exact path = '/mechanical' component = {Me}/>
      
      </div>
      </Fragment>

    )
  }
}

export default App;
