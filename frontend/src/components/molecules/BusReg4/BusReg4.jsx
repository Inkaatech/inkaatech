import React, { Component } from "react";
import Button from "../../atoms/Button";

export default class BusReg4 extends Component {
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            step,
            firstName,
            lastName,
            companyName,
            email,
            businessType,
            password,
            address,
            description,
            hours,
        } = this.props;
        return (
            <div>
                <h2>Here is the information you entered:</h2>
                First Name: <b>{firstName}</b>
                <br />
                Last Name: <b>{lastName}</b>
                <br />
                Company Name: <b>{companyName}</b>
                <br />
                Email Address: <b>{email}</b>
                <br />
                Business Type: <b>{businessType}</b>
                <br />
                Address: <b>{address}</b>
                <br />
                Description: <b>{description}</b>
                <br />
                <Button className="Back" onClick={this.back}>
                    « Back
                </Button>
            </div>
        );
    }
}
