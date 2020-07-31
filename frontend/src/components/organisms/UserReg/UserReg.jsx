import React, { Component } from "react";
import UserReg1 from "../../molecules/UserReg1";
import UserReg2 from "../../molecules/UserReg2";

export default class index extends Component {
    state = {
        step: 1,

        //step1
        firstName: "",
        lastName: "",
        email: "",
        password: "",

        //step2
        address: "",

    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };

    showStep = () => {
        const {
            step,
            firstName,
            lastName,
            email,
            password,
            address
        } = this.state;

        if (step === 1) {
            return (
                <UserReg1
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    password={password}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                />
            );
        }
        if (step === 2) {
            return (
                <UserReg2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    address={address}
                />
            );
        }
    };

    render() {
        return <div className="UserReg-content">{this.showStep()}</div>;
    }
}
