import React from 'react';
import '../css/MainContainer.css';
import NavMenu from "./NavMenu"

function MainContainer(props) {
    //console.log('Maladies', maladies);
    return (
        <div className="mainContainer">
            <NavMenu />
        </div>
    )
}

export default MainContainer
