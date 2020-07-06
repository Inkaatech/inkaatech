import React, { Component } from "react";
import LeftPane from "../../components/organisms/LeftPane";
import UserReg from "../../components/organisms/UserReg";

export default class busSignIn extends Component {
    render() {
        return (
            <div className="userreg-content">
                <div className="row">
                    <div className="col">
                        <LeftPane />
                    </div>
                    <div className="col">
                        <UserReg />
                    </div>
                </div>
            </div>
        );
    }
}
