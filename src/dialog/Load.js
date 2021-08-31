import React, {Component} from 'react';
import {FadeLoader,  } from 'react-spinners';
import '../css/Load.css';


class loaderDialog extends Component{
    render(){
        return(
            <div className="load">
                <FadeLoader loading />
                <p className="textLoad">Patienter...</p>
            </div>
        )
    }
}

export default loaderDialog;