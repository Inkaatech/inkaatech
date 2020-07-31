import React, { Component } from "react";
import Button from "../../components/atoms/Button";
import LeftPane from "../../components/organisms/LeftPane";
import history from "../../components/history";
import "./home.scss";

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="row">
                    <div className="col">
                        <LeftPane />
                    </div>
                    <div className="col">
                        <h1 className="heading">Choose the option that best suits you</h1>
                        <form>
                            <Button onClick={() => history.push("/BusinessSignIn")}>Business</Button>
                            <Button onClick={() => history.push("/UserSignIn")}>User</Button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
