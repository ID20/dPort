import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import logo from './2.png';
import './App.css';
import loginadmin from "./loginadmin";
import login from "./login";
import  Nav from "./Nav";
import Aboutus from "./Aboutus";
import DoctorList from "./DoctorList";
import DoctorListEdit from "./DoctorListEdit";
import adddoctor from "./adddoctor";
import editDoctorList from './editDoctorList';
import deletedoc from './deletedoc';
import register from "./register";



class App extends Component {
  render() {
    return (

<span>
<Nav />

<Route path="/" exact component={Aboutus} />
<Route path="/login" component={login} />
<Route path="/loginadmin" component={loginadmin} />
<Route path="/DoctorListEdit" component={DoctorListEdit} />
<Route path="/DoctorList" component={DoctorList} />
<Route path="/adddoctor" component={adddoctor} />
<Route path="/register" component={register} />
<Route path="/DoctorListEdit/update/:id" component={editDoctorList}/>
<Route path="/DoctorListEdit/delete/:id" component={deletedoc}/>

</span>
  );


  }
}

export default App;
