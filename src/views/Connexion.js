import React, { Component } from 'react'
import '../css/Connexion.css';
    
const Connexion = () => {
    return (
        <div className="formulaireConnexion">
            <form>
                <h2 className="">Veuiller vous connecter</h2>
                <div className="iconeConn"><div className="icon d-flex align-items-center justify-content-center">
                    <i className='iconUser fa fa-user-o mt-1 '></i> </div>
                </div>

                <div className="form-group">
                    <label for="login" className="mt-2" labelText>Votre nom d'utilisateur</label>
                    <input 
                        type="type" 
                        className="form-control" 
                        id="login" aria-describedby="emailHelp" 
                        placeholder="Votre nom d'utilisateur" 
                        required 
                    />
                </div>

                <div className="form-group mt-3">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" required />
                </div>

                <div className="divB"><button type="submit" className="buttonConnexion btn btn mt-4">Connexion</button></div>

            </form>

        </div>


    )
}

export default Connexion;
