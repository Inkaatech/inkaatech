import React, { Component } from "react";
import LeftPane from "../../components/organisms/LeftPane";
import BusinessReg from "../../components/organisms/BusinessReg";

export default class busReg extends Component {
    render() {
        return (
            <div className="busreg-content">
                <div className="row">
                    <div className="col">
                        <LeftPane />
                    </div>
                    <div className="col">
                        <BusinessReg />
                    </div>
                </div>
            </div>
        );
    }
}
