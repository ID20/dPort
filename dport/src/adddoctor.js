import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import Doctor from './models/Doctor';

class adddoctor extends React.Component {
  constructor(props) {
        super(props);

        this.handleChangephone = this.handleChangephone.bind(this);
        this.handleChangedescription = this.handleChangedescription.bind(this);
        this.handleChangedname = this.handleChangedname.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            phone: "",
            description: "",
            dname: "",
        };
    }

    handleChangephone(event){
        this.setState({
            phone: event.target.value,
        })
    }

    handleChangedescription(event){
        this.setState({
            description: event.target.value,
        })
    }
    handleChangedname(event){
        this.setState({
            dname: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        let Doctor = {
            phone: this.state.phone,
            description: this.state.description,
            dname: this.state.dname,
        }
        axios.post("http://localhost:3001/todos/adddoctor", Doctor).then(res => alert(res.data));

        this.setState({
            phone: "",
            description:"" ,
            dname:""

        })
    }
  
  render()
  {

  return (
  <div className="log">
        <React.Fragment>
                <div>
                    <h3 id="down">Add</h3>
                    <form id="cen">
                        <div className="form-group">
                            <label>Phone: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.handleChangephone}
                            />
                        </div>
                        <div className="form-group">
                            <label>Doctor_Name </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.dname}
                                onChange={this.handleChangedname}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label>Description </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.handleChangedescription}
                            />
                        </div>
                        <div className="form-group">
                            <input type="button" value="Add" className="btn btn-primary"  onClick={this.handleSubmit} />
                        </div>
                    </form>
                </div>
            </React.Fragment>
    
 </div>
  );
}
  }
  
export default adddoctor;
  