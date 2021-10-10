import React from 'react'
import '../css/Menu.css';
import { NavLink} from 'react-router-dom';

function Menu() {
    return ( 
        <div className="menu">
            <ul>
                <li><i id="partT" className="IconHomeH fa fa-plus"></i> HOSPITAL </li>

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
                    <NavLink to="/history">
                        <center>
                            <i className="IconHome fa fa-history"></i>
                        </center>
                        Historique
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/config">
                        <center>
                            <i className="IconHome fa fa-gear fa-spin"></i>
                        </center>
                        Configuration
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu
