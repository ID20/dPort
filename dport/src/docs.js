import { browserHistory } from 'react-router'
import login from "./login";
import loginadmin from "./loginadmin";
import Aboutus from "./Aboutus";
import {Link} from 'react-router-dom';
import logo from './2.png';
import './App.css';
import React, { Component } from 'react';


class App extends Component {
	componentWillMount() {
  window.goBack();
}
  render() {
    return (
      <div className="App">
	  
        <div className="App-header">
		
		<h1> <a href="Aboutus" id="coll">Doctor's portal</a></h1>
		
		<div className="btn-group btn-group-toggle" >

  <label className="btn btn-secondary active">
    <Link to="/login" ><input type="radio" name="options" id="option1" autoComplete="off"  /> User </Link>
  </label>
  <label className="btn btn-secondary">
    <Link to="/loginadmin"> <input type="radio" name="options" id="option2" autoComplete="off" /> Admin</Link>
  </label>
  
                     
					
                         
                   
             
  
</div>
		
        </div>  
       
        <p className="App-intro">

        </p>
      </div>
	  );
  }
}

export default App;