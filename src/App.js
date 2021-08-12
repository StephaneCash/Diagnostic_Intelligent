import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Connexion from './views/Connexion';
import MainContainer from './views/MainContainer';
import "./App.css";
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    login: "okenhde",
    password: "",
    maladies: [],
    url: "http://localhost:8000/api/maladies"
  }

  getMaladies = async () => {
    const maladies = await axios.get(this.state.url);
    this.setState({maladies: maladies.data});
  };

  componentDidMount() {
    this.getMaladies();
  }

  render() {
    return (
      <div className="app">

        {
          (this.state.login === "okende") ?
            (
              <div>
                <Connexion />
              </div>
            ) : (
              <div>
                <MainContainer 
                  maladies = {this.state.maladies}
                />
              </div>
            )
        }
      </div>
    )
  }
}
