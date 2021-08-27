import '../css/Connexion.css';
import { useState, useEffect } from 'react';
import App from "../App";
import { useHistory } from "react-router-dom";

const Connexion = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');
    const [nom, setNom] = useState('');
    const [hide, setHide] = useState(false);

    let history = useHistory();

    console.log(history)

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(password, username)
        if (username === "okende") {
            if (password === "111111") {
                //console.log("TRANQUILLE", props);
                history.push('/Maladies');
                setNom("okende");
                setHide(true);
            } else {
                setError('Nom d\'utilisateur ou mot de passe invalide');
                setPassword('');
                setUsername('');
            }
        } else {
            setError('Nom d\'utilisateur ou mot de passe invalide');
            setPassword('');
            setUsername('');
        }
    }

    useEffect(() => {
        if (password.length > 5 && username !== '') {
            setBtn(true);
        } else if (btn === true) {
            setBtn(false);
        }
    }, [password, username, btn])


    return (
        <div className="formulaireConnexion">
            <form onSubmit={handleSubmit}>
                <div className="iconeConn"><div className="icon d-flex align-items-center justify-content-center">
                    <i className='iconUser fa fa-user-o mt-1 '></i> </div>
                </div>
                <h2 className="">Connexion</h2>
                <br />
                { error ?  <h6 style={{ color: "red", backgroundColor: "white", padding: "8px", borderRadius: "4px", fontSize:"15px" }}> {error} </h6> : ""} 
                <div className="form-group">
                    <label for="login" className="form-label" labelText>Username </label>
                    <input
                        type="text"
                        className="form-control"
                        id="login" aria-describedby="emailHelp"
                        placeholder="Votre nom d'utilisateur"
                        value={username}
                        onChange={handleUsername}
                    />
                </div>

                <div className="form-group mt-3">
                    <label for="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>

                {
                    btn ? <button
                        className="btn btn btnConnexion mt-4 form-control"
                        style={{ backgroundColor: "#02022d", border: "1px solid white", color: "white" }}>
                        Se connecter
                    </button>
                        :
                        <button
                            className="btn btn btnConnexion mt-4 form-control"
                            style={{ backgroundColor: "silver", border: "1px solid white", color: "black" }} disabled>Se connecter</button>
                }

            </form>
            {
                hide ? <App nom={nom} /> : ""
            }


        </div>
    )
}

export default Connexion;
