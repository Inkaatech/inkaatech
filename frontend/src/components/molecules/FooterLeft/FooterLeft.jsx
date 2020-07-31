import React, { Component } from "react";
import { ReactComponent as Spa } from "../../../images/ic_spa_24px.svg";
import { ReactComponent as Share } from "../../../images/ic_share_24px.svg";
import { ReactComponent as Group } from "../../../images/ic_group_24px.svg";
import "./FooterLeft.scss";

export default class FooterLeft extends Component {
    render() {
        return (
            <div className="footerLeft-content">
                <div className="row">
                    <div className="col">
                        <Spa fill="#234556" />
                        <p>Support Local Businesses</p>
                    </div>
                    <div className="col">
                        <Share />
                        <p>Expand your Network</p>
                    </div>
                    <div className="col">
                        <Group />
                        <p>Be part of an ecosystem</p>
                    </div>
                </div>
            </div>
        );
    }
}
