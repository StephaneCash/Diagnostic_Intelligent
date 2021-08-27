import React from 'react'
import '../css/Users.css';
import Menu from './Menu';


function Users() {
    return (
        <>
        <Menu />
        <div className="users">
            <p className="userActifs"><i className="fa fa-user-o"></i> Utilisateurs </p>
            <table className="table table-inverse">
                <thead>
                    <tr>
                        <th  className="col-sm-1"  style={{  }}>#</th>
                        <th  style={{  }}><i className="fa fa-envelope"></i> Email</th>
                        <th ><i className="fa fa-user-circle"></i> Username</th>
                        <th ><i className="fa fa-male"></i> Rôle</th>
                        <th ><i className="fa fa-gears"></i> Etat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="">1</td>
                        <td>Mark@gmail.com</td>
                        <td>Otto</td>
                        <td>@Visiteur</td>
                        <td ><i className="fa fa-check"></i> </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Thornton</td>
                        <td ><i className="fa fa-check"></i> </td>
                    </tr>
                    <tr>
                        <td>3 </td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@Admin</td>
                        <td ><i className="fa fa-times"></i> </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Users
