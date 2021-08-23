import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Connect from './views/Connect';
import MainContainer from './views/MainContainer';
import "./App.css";
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App(props) {

  var [isLogin, setLogin] = useState(true  );

  console.log(props)

  return (
    <div className="app">
      <Connect />
    </div >
  )
}
