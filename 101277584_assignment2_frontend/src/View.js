import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Navigation from './Nav';


function View(props) {
    let loc = useLocation()

    const [employee, setEmployee] = useState([])

    useEffect(() => {
        axios.get(`/api/v1/employees/${loc.state.from}`)
        .then(response =>{
            setEmployee(response.data)
        })
    })

    return (
        <div className="container">
            <Navigation/>
            <br/>
            <h2 className="border border-primary rounded-circle text-center">View Employee Details</h2>
            <br/>
            <ul className="list-group">
                <li className="list-group-item">Employee First Name: {employee.first_name}</li>
                <li className="list-group-item">Employee Last Name: {employee.last_name}</li>
                <li className="list-group-item">Employee Email ID: {employee.email}</li>
            </ul>
            <br/>
            <a href="/" className="btn btn-primary">Return to home page</a>
        </div>
    )
}

export default View