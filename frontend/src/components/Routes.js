import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import BusinessSignIn from "../pages/BusSignIn/busSignIn";
import BusinessReg from "../pages/BusReg/busReg";
import UserSignIn from "../pages/UserSignIn/userSignIn";
import UserReg from "../pages/UserReg/userReg";
import Home from "../pages/Home/home";
import history from "./history";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/BusinessSignIn" component={BusinessSignIn} />
                    <Route path="/BusinessReg" component={BusinessReg} />
                    <Route path="/UserSignIn" component={UserSignIn}/>
                    <Route path="/UserReg" component={UserReg}/>
                </Switch>
            </Router>
        );
    }
}
