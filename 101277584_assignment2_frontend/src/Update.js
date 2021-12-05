import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Navigation from './Nav';


function Update() {

    let location = useLocation();
    let navigate = useNavigate();
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get(`/api/v1/employees/${location.state.from}`)
        .then(response =>{
            setEmployee(response.data)
        })
    })
    
    const [fname, setFirstName] = useState("")
    const [lname, setLastName] = useState("")
    const [em, setEmail] = useState("")

    const fnameHandler = (e) => {
        setFirstName(e.target.value)
    }
    const lnameHandler = (e) => {
        setLastName(e.target.value)
    }
    const emHandler = (e) => {
        setEmail(e.target.value)
    }

    const submitHandler = (e) => {
        e.preDefault();

        let body = {
            first_name: fname,
            last_name: lname,
            email: em
        }

        axios.put(`/api/v1/employees/${location.state.from}`, body)
            .then((res) => {
                if (res.data.success) {
                    navigate('/', { replace: true })
                    alert('Employee data update successful!')
                } 
            })
            .catch(error => alert(error))
        }
    
    return (
        <div className="container">
            <Navigation/>
            <br/>
            <h2 className="border border-primary rounded-circle text-center">Update Employee</h2>
            <br/>
            <form onSubmit={submitHandler} className="form">
                <div className="form-group">
                    <div className="form-group col-md-12">
                        <label>First Name:</label>
                        <input type="text" value={fname} onChange={fnameHandler} className="form-control" placeholder={employee.first_name}/>
                    </div>
                    <div className="form-group col-md-12">
                        <label>Last Name:</label>
                        <input type="text" value={lname} onChange={lnameHandler} className="form-control" placeholder={employee.last_name}/>
                    </div>
                    <div className="form-group col-md-12">
                        <label>Email ID:</label>
                        <input type="email" value={em} onChange={emHandler} className="form-control" placeholder={employee.email}/>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-success">Save</button>
                <a href="/" className="btn btn-danger">Cancel</a>
            </form>  
        </div>
    )
}

export default Update