import React, { Component } from "react";
import Map from "../../atoms/Map";
import Button from "../../atoms/Button";

class BusReg2 extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        return (
            <div style={{ margin: "100px" }}>
                <h1>Enter Location:</h1>
                <Button className="Back" onClick={this.back}>
                    « Back
                </Button>
                <Button className="Next" onClick={this.continue}>
                    Next »
                </Button>
                <Map google={this.props.google} center={{ lat: 18.5204, lng: 73.8567 }} height="300px" zoom={15} />
            </div>
        );
    }
}

export default BusReg2;
