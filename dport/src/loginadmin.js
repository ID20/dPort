import React from "react";

import './Login.css';
import axios from 'axios';
import Admin from './models/Admin';

class loginadmin extends React.Component {

     state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      this.props.history.push("DoctorListEdit");
    }
  }
  constructor(props) {
        super(props);

        this.handleChangeemail = this.handleChangeemail.bind(this);
        this.handleChangepwd = this.handleChangepwd.bind(this);
        this.handleChangeaname = this.handleChangeaname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: "",
            pwd: "",
            aname: "",
        };
    }

    handleChangeemail(event){
        this.setState({
            email: event.target.value,
        })
    }

    handleChangepwd(event){
        this.setState({
            pwd: event.target.value,
        })
    }
    handleChangeaname(event){
        this.setState({
            aname: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        
        let Admin= {
            email: this.state.email,
            pwd: this.state.pwd,
            aname: this.state.aname,
        }
        let stringify = require('json-stringify-safe');
        axios.post("http://localhost:3001/todos/loginadmin", Admin)
        .then((res) => res.data)
    .then((res) => {
    
    if(res === "Successful")
    {
       this.setRedirect();
       this.renderRedirect();
    }
    else
    {
        alert("Invalid Credentials");
    }
  })


        this.setState({
            email: "",
            pwd:"" ,
            aname:""

        })
    }
  
  render()
  {

  return (
  <div className="log">
        <React.Fragment>
                <div>
                    <h3 id="down">Sign In</h3>
                    
                    <form id="cen" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Email: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleChangeemail}
                            />
                        </div>
                        <div className="form-group">
                            <label>Name </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.aname}
                                onChange={this.handleChangeaname}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Password </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.pwd}
                                onChange={this.handleChangepwd}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        
 </div>
  );
}
  }
  
export default loginadmin;