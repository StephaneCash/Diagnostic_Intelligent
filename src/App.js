import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Connexion from './views/Connexion';
import MainContainer from './views/MainContainer';
import "./App.css";
import { render } from '@testing-library/react';
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    login: "okende",
    password: ""
  }

  render() {
    return (
      <div className="app">
        
        {
          (this.state.login === "okdende") ?
            (
              <div>
                <Connexion />
              </div>
            ) : (
              <div>
                <MainContainer />
              </div>
            )
        }
      </div>
    )
  }
}

