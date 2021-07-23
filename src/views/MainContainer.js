import React from 'react';
import Menu from './Menu';
import UpContainer from './UpContainer';
import '../css/MainContainer.css';
import CenterData from './CenterData';
import NavMenu from './NavMenu';
import { BrowserRouter, Route } from 'react-router-dom';
import Doctors from './Doctors';

function MainContainer(props) {
    console.log(props.stated)
    return (
        <div className="mainContainer">
            <UpContainer />
            <NavMenu />
        </div>
    )
}

export default MainContainer
