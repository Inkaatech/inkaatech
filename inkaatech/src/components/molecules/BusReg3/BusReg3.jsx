import React, { Component } from "react";
import Button from "../../atoms/Button";

export default class BusReg2 extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { description, handleChange } = this.props;
        return (
            <div>
                <h1>What does your company do?</h1>
                <textarea
                    className="description"
                    name="description"
                    placeholder="Description"
                    value={description}
                    rows="10"
                    cols="75"
                    onChange={handleChange("description")}
                >
                    Description
                </textarea>
                <p></p>
                <Button className="Back" onClick={this.back}>
                    « Back
                </Button>
                <p></p>
                <Button className="Next" onClick={this.continue}>
                    Next »
                </Button>
            </div>
        );
    }
}
