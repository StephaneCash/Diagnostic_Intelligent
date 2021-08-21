import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Connexion from './views/Connexion';
import MainContainer from './views/MainContainer';
import "./App.css";
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App (props) {

  var [isLogin, setLogin] = useState(true);
  var [profil, setProfil] = useState({});

  console.log(props)

  return (
    <div className="app">
      <Router>
        <Switch>
          {(() => {
            if (isLogin === false) {
              return <Route path="/" render={() => {
                return (
                  <Connexion state={setLogin} profil={setProfil} />
                )
              }} />
            } else if(isLogin){
              return <MainContainer profil={profil} />
            }
          })()}
        </Switch>
      </Router>
    </div>
  )
}
