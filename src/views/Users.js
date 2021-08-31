import React from 'react'
import '../css/Users.css';
import Menu from './Menu';
import { useState, useEffect } from "react"
import UpContainer from './UpContainer';
import Load from '../dialog/Load'


function Users() {

    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/api/users')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data)
                setUsers(data);
                setLoader(false)
            })
    }, [])

    return (
        <>
            <UpContainer />
            <Menu />
            <div className="users">
                <p className="userActifs"><i className="fa fa-user-o"></i> Utilisateurs </p>
                {
                    loader ? <Load /> : ""
                }
                <table className="table table-inverse">

                    <thead>
                        <tr>
                            <th className="col-sm-1" style={{}}>#</th>
                            <th style={{}}><i className="fa fa-user-circle"></i> Username</th>
                            <th ><i className="fa fa-envelope"></i> Email</th>
                            <th ><i className="fa fa-male"></i> Rôle</th>
                            <th ><i className="fa fa-gears"></i> Etat</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((element, index) => {
                                return <tr key={index}>
                                    <td>{element.id}</td>
                                    <td>{element.username}</td>
                                    <td>{element.email}</td>
                                    <td>{element.role}</td>
                                    <td><i className="fa fa-check"></i> Activé</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Users
