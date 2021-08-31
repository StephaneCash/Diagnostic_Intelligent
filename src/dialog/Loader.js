import React, {Component} from 'react';
import {FadeLoader,  } from 'react-spinners';
import '../css/Loader.css';


class loaderDialog extends Component{
    render(){
        return(
            <div className="loader">
                <FadeLoader loading />
                <p className="textLoader">Patienter...</p>
            </div>
        )
    }
}

export default loaderDialog;