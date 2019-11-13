import React, { Component } from 'react';

import './Login.css';
import axios from 'axios';
import User from './models/User';
import Doctor from './models/Doctor'; 

import { Link } from 'react-router-dom';

class deletelist extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
        this.onChangephone = this.onChangephone.bind(this)
        this.onChangedname = this.onChangedname.bind(this)
        this.onChangedescription = this.onChangedescription.bind(this)
        this.state = {
            phone: "",
            description:"",
            dname:""
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/todos/DoctorListEdit/update/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    phone: response.data.phone,
                    description: response.data.description,
                    dname: response.data.dname
                })
            }

      )
    }

    onChangedname = event => {
        this.setState({
            dname:event.target.value,
        })
    }

    onChangedescription = event => {
        this.setState({
            description:event.target.value,
        })
    }
    onChangephone = event => {
        this.setState({
            phone:event.target.value,
        })
    }

    onSubmit = event => {
        event.preventDefault();

        let todo = {
            phone: this.state.phone,
            description: this.state.description,
            dname:this.state.dname
        }
        axios.post("http://localhost:3001/todos/DoctorListEdit/update/" + this.props.match.params.id, todo).then(res =>
            console.log(res.data)
        );
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <h3>Update Info</h3>
                    <form >
                        <div className="form-group">
                            <label>Phone </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.phone}
                                onChange={this.onChangephone}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangedescription}
                            />
                        </div>
                            <br />
                             <div className="form-group">
                            <label>Name </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.dname}
                                onChange={this.onChangedname}
                            />
                        </div>
                       
                            <div className="form-group">
                                <input type="button" value="Update Info" className="btn btn-primary"  onClick={this.onSubmit}/>
                            </div>
                    </form>
                </div>
            </React.Fragment>
            

        );
    }
}

export default editDoctorList;