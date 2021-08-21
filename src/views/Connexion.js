import '../css/Connexion.css';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import App from "../App";


const Connexion = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');
    const [nom, setNom] = useState('');
    const [hide, setHide] = useState(false);


    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(password, username)
        if (username === "okende") {
            if (password === "111111") {
                console.log("TRANQUILLE", props);
               history.push({ pathname: '/Maladies' });
               setNom("okende");
               setHide(true);
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
                <h2 className="">Veuiller vous connecter</h2>
                <div className="iconeConn"><div className="icon d-flex align-items-center justify-content-center">
                    <i className='iconUser fa fa-user-o mt-1 '></i> </div>
                </div>
                <br />
                <h6 style={{ color: "red" }}> {error} </h6>
                <div className="form-group">
                    <label for="login" className="mt-2" labelText>Votre nom d'utilisateur ou email</label>
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
                    <label for="password">Password</label>
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
                        className="btn btn btnConnexion mt-5 form-control"
                        style={{ backgroundColor: "#02022d", border: "1px solid white", color: "white" }}>
                        Se connecter
                    </button>
                        :
                        <button
                            className="btn btn btnConnexion mt-5 form-control"
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
