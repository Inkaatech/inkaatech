import React, { Component } from "react";
import LeftPane from "../../components/organisms/LeftPane";
import UserSignIn from "../../components/organisms/UserSignIn";

export default class busSignIn extends Component {
    render() {
        return (
            <div className="usersignin-content">
                <div className="row">
                    <div className="col">
                        <LeftPane />
                    </div>
                    <div className="col">
                        <UserSignIn />
                    </div>
                </div>
            </div>
        );
    }
}
