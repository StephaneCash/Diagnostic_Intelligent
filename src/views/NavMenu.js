import Users from "./Users";
import Diagnostic from "./Diagnostic";
import Doctors from "./Doctors";
import Malades from "./Malades";
import Maladies from "./Maladies";
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from "./Menu";

import React from 'react'

function NavMenu(props) {

    let maladies = props.maladies;;
    console.log("hdfbfhvhfv", maladies)
    return (
        <BrowserRouter>
            <Menu />
            <Route path="/" exact component = {Maladies} />
            <Route path="/Maladies" exact component ={Maladies} />
            <Route path="/Doctors" exact component={Doctors} />
            <Route path="/Users" exact component={Users} />
            <Route path="/Diagnostic" exact component={Diagnostic} />
            <Route path="/Malades" exact component={Malades} />
        </BrowserRouter >
    )
}

export default NavMenu
