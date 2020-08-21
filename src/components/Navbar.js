import React,{Component,Fragment} from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component{
  render(){
    return(
      <Fragment>
      <nav className="navbar navbar-light bg-light">
       <Link to ='/' className="navbar-brand">hosteZON<span>academics</span></Link>
      </nav>
      <div className = "container">
      <Link className = "btn btn-dark btn-custom" to = '/cse'><i class="fas fa-laptop fa-3x"></i> CSE</Link>
      <Link className = "btn btn-dark btn-custom" to = '/it'><i class="fas fa-server fa-3x"></i> IT</Link>
      <Link className = "btn btn-dark btn-custom" to = '/ece'><i class="fas fa-satellite fa-3x"></i> ECE</Link>
      <Link className = "btn btn-dark btn-custom" to = '/eee'><i class="fas fa-plug fa-3x"></i> EEE</Link>
      <Link className = "btn btn-dark btn-custom" to = '/civil'><i class="fas fa-hard-hat fa-3x"></i> CE</Link>
      <Link className = "btn btn-dark btn-custom" to = '/mechanical'><i class="fas fa-cogs fa-3x"></i> ME</Link>
      </div>

      </Fragment>
    )
  }
}

export default Navbar;
