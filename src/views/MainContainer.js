import React from 'react';
import UpContainer from './UpContainer';
import '../css/MainContainer.css';
import NavMenu from './NavMenu';

function MainContainer(props) {
    let maladies = props.maladies;
    //console.log('Maladies', maladies);
    return (
        <div className="mainContainer">
            <UpContainer 
                
            />
            <NavMenu
                maladies = {maladies}
            />
        </div>
    )
}

export default MainContainer
