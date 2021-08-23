import React from 'react';
import '../css/MainContainer.css';
import NavMenu from "./NavMenu"
import UpContainer from "./UpContainer";

function MainContainer(props) {
    //console.log('Maladies', maladies);
    return (
        <div className="mainContainer">
            <UpContainer />
            <NavMenu />
        </div>
    )
}

export default MainContainer
