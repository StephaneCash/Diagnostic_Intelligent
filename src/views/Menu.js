import React from 'react'
import '../css/Menu.css';
import { NavLink, Link } from 'react-router-dom';
import NavMenu from './NavMenu';

function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><i id="partT" className="IconHome fa fa-stethoscope"></i> </li>

                <li>
                    <NavLink to="/Maladies">
                        <center>
                            <i className="IconHome fa fa-home "></i>
                        </center>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Diagnostic">Diagnostic</NavLink></li>
                <li>
                    <NavLink to="/Doctors">
                        <center>
                            <i className="IconHome fa fa-user-md"></i>
                        </center>
                        Doctors
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Hop"><center><i className="IconHome fa fa-hospital"></i></center>Hop</NavLink>
                </li>

                <li>
                    <NavLink to="/Users">
                        <center>
                            <i className="IconHome fa fa-user"></i>
                        </center>
                        Users
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
