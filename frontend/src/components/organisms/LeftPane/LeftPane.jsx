import React, { Component } from "react";
import { ReactComponent as Spa } from "../../../images/ic_spa_24px.svg";
import { ReactComponent as Share } from "../../../images/ic_share_24px.svg";
import { ReactComponent as Group } from "../../../images/ic_group_24px.svg";
import "./LeftPane.scss";

export default class LeftPane extends Component {
    render() {
        return (
            <div className="leftPane-content">
                <div className="logo-area">
                    <h1>Inkaatech</h1>
                    <h2>Company slogan</h2>
                </div>
                <div className="row footer">
                    <div className="col">
                        <Spa />
                        <p className="legend">Support Local Businesses</p>
                    </div>
                    <div className="col">
                        <Share />
                        <p className="legend">Expand your Network</p>
                    </div>
                    <div className="col">
                        <Group />
                        <p className="legend">Be part of an ecosystem</p>
                    </div>
                </div>
            </div>
        );
    }
}
