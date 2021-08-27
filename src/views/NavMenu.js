import Users from "./Users";
import Diagnostic from "./Diagnostic";
import Doctors from "./Doctors";
import Malades from "./Malades";
import Maladies from "./Maladies";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'
import Connexion from "./Connexion";
import ErrorPage from "./ErrorPage";

function NavMenu(props) {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Connexion} />
                <Route path="/Maladies" exact component={Maladies} />
                <Route path="/Doctors" exact component={Doctors} />
                <Route path="/Users" exact component={Users} />
                <Route path="/Diagnostic" exact component={Diagnostic} />
                <Route path="/" exact component={Malades} />
                <Route exact component={ErrorPage} />
            </Switch>
        </BrowserRouter >
    )
}

export default NavMenu
