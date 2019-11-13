import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import User from './models/User';

class register extends React.Component {
  constructor(props) {
        super(props);

        this.handleChangeemail = this.handleChangeemail.bind(this);
        this.handleChangepwd = this.handleChangepwd.bind(this);
        this.handleChangeuname = this.handleChangeuname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: "",
            pwd: "",
            uname: "",
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
    handleChangeuname(event){
        this.setState({
            uname: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        let User = {
            email: this.state.email,
            pwd: this.state.pwd,
            uname: this.state.uname,
        }
        axios.post("http://localhost:3001/todos/register", User).then(res => alert(res.data));

        this.setState({
            email: "",
            pwd:"" ,
            uname:""

        })
    }
  
  render()
  {

  return (
  <div className="log">
        <React.Fragment>
                <div>
                    <h3 id="down">Sign In</h3>
                    <form id="cen">
                        <div className="form-group">
                            <label>Email: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleChangeemail}
                            />
                        </div>
                        <div className="form-group">
                            <label>User_Name </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.uname}
                                onChange={this.handleChangeuname}
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
                            <input type="button" value="Register" className="btn btn-primary"  onClick={this.handleSubmit} />
                        </div>
                    </form>
                </div>
            </React.Fragment>
        
 </div>
  );
}
  }
  
export default register;
  