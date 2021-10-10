import React from 'react'
import '../css/UpContainer.css';
import { Link} from 'react-router-dom';


function UpContainer() {


    return (
        <div className="upContainer">
                <div className="contentRight">
                    <Link to='/'><button className="btn btn-success" > <i className="fa fa-sign-out"></i> Déconnexion</button> </Link>
                </div>
        </div>
    )
}

export default UpContainer
