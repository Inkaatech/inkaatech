import React, { Component } from "react";
import LeftPane from "../../components/organisms/LeftPane";
import BusinessSignIn from "../../components/organisms/BusinessSignIn";

export default class busSignIn extends Component {
    render() {
        return (
            <div className="bussignin-content">
                <div className="row">
                    <div className="col">
                        <LeftPane />
                    </div>
                    <div className="col">
                        <BusinessSignIn />
                    </div>
                </div>
            </div>
        );
    }
}
