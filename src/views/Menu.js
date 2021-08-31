import React from 'react'
import '../css/Menu.css';
import { NavLink, Link} from 'react-router-dom';

function Menu() {
    return (
        <div className="menu">
            <ul>
                <li><i id="partT" className="IconHome fa fa-stethoscope"></i> HOSPITAL </li>

                <li>
                    <NavLink to="/Maladies">
                        <center>
                            <i className="IconHome fa fa-home "></i>
                        </center>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Diagnostic"><center><i className="IconHome fa fa-medkit"></i></center> Diagnostic </NavLink>
                </li>
                <li>
                    <NavLink to="/Doctors">
                        <center>
                            <i className="IconHome fa fa-user-md"></i>
                        </center>
                        Doctors
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Users">
                        <center>
                            <i className="IconHome fa fa-user"></i>
                        </center>
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/configuration">
                        <center>
                            <i className="IconHome fa fa-gear"></i>
                        </center>
                        Configuration
                    </NavLink>
                </li>
                <li>
                    <Link to="/"><center><i className=" fa fa-sign-out"></i></center>Déconnexion</Link>
                </li>

            </ul>
        </div>
    )
}

export default Menu
