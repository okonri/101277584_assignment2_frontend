import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navigation from './Nav';

function List() {

    const [employee, setEmployeeList] = useState([])

    useEffect(() => {
        axios.get('/api/v1/employees')
        .then(res =>{
            setEmployeeList(res.data)
        }).catch(error => console.log(error))
    }, [])

    const deleteEmployee = (id) => {
        axios.delete(`/api/v1/employees/${id}`)
        .then(window.location
            .reload(false),alert('Employee Data Removed!'))
    }

    return (
        <div className="container">
            <Navigation/>
            <br/>
            <h2 className="border border-primary rounded-circle text-center">Employees List</h2>
            <br/>
            <Link to="/add-employee/_add" className="btn btn-primary">Add Employee</Link>
            <br/>
            <br/>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((value) => {
                        return [
                            <tr>
                                <td>{value.first_name}</td>
                                <td>{value.last_name}</td>
                                <td>{value.email}</td>
                                <td>
                                    <Link to={{pathname:`/add-employee/${value._id}`}} state={{ from: value._id }} className="btn btn-success">Update</Link>
                                    <button onClick={() => deleteEmployee(value._id)} className="btn btn-danger">Delete</button>
                                    <Link to={{pathname:`/view-employee/${value._id}`}} state={{ from: value._id }} className="btn btn-info">View</Link>
                                </td>
                            </tr>
                        ]
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default List