import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Navigation from './Nav';


function Add() {

    let navigate = useNavigate();

    //const [_id, setId] = useState(1)
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

        axios.post('/api/v1/employees', body)
            .then((res) => {
                if (res.data.success) {
                    navigate('/', { replace: true })
                    alert('New Employee Added!')
                } else {
                    alert(JSON.stringify(res.data.err.message))
                }  
            })
    }
    
    return (
        <div className="container">
            <Navigation/>
            <br/>
            <h2 className="border border-primary rounded-circle text-center">Add Employee</h2>
            <br/>
            <form onSubmit={submitHandler} className="form">
                <div className="form-group">
                    <div className="form-group col-md-12">
                        <label>First Name:</label>
                        <input type="text" value={fname} onChange={fnameHandler} className="form-control" placeholder="First Name"/>
                    </div>
                    <div className="form-group col-md-12">
                        <label>Last Name:</label>
                        <input type="text" value={lname} onChange={lnameHandler} className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="form-group col-md-12">
                        <label>Email ID:</label>
                        <input type="email" value={em} onChange={emHandler} className="form-control" placeholder="Email Address"/>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-success">Save</button>
                <a href="/" className="btn btn-danger">Cancel</a>
            </form>  
        </div>
    )
}

export default Add