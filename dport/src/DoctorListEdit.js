
import './Login.css';
import axios from 'axios';
import User from './models/User';
import React, { Component } from 'react';
import Doctor from './models/Doctor'; 
import { Link } from 'react-router-dom';

const Listt = props => (
        <tr>
            <td>{props.todo.dname}</td>
        <td>{props.todo.description}</td>
        <td>{props.todo.phone}</td>
        <Link to={"DoctorListEdit/update/" + props.todo._id}>
            Edit
        </Link>
         <Link to={"DoctorListEdit/delete/" + props.todo._id}>
            Delete
        </Link>
    
        </tr>
        
)

class DoctorListEdit extends Component {
    
   constructor(props) {
        super(props);
        this.state = {
             doctors:[]
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/todos/DoctorListEdit").then(res => {
            this.setState({
                doctors: res.data
            })
        })
    }

    componentDidUpdate() {
        axios.get("http://localhost:3001/todos/DoctorListEdit").then(res => {
            this.setState({
                doctors: res.data
            })
        })
    }

    doctorList() {
        return (
            this.state.doctors.map((todo, i) => {
                return <Listt todo={todo} key={i} />
            })
        );
    }

    

    render() {
        return (
            <React.Fragment>
              
                    <div>
                     <button id="left"><a href="/adddoctor">Add Doctors</a></button>
                        <h3 id="dow">Doctor List</h3>

                        <table className="table table-striped" style={{ marginTop: 20 }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.doctorList()}
                            </tbody>
                        </table>
                    </div>
            </React.Fragment>
        );
    }
}

export default DoctorListEdit;