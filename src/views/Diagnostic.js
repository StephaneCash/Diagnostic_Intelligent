import React from 'react'
import "../css/Diagnostic.css";

function Diagnostic() {
    return (
        <div className="diagnostic">
            <div className="title">Diagnostic</div>
            <div className="contentDiagnostic">
                <form className="form">
                    <label >Veuillez entrer un symptôme : </label>
                    <input type="text" placeholder="Entrer un symptôme" className="form-control" required/>
                    <button className="btn btn-primary buttonDiagnostic">
                            <span className="fa fa-send"></span> Valider
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Diagnostic
