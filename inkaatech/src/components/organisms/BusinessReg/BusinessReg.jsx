import React, { Component } from "react";
import BusReg1 from "../../molecules/BusReg1";
import BusReg2 from "../../molecules/BusReg2";
import BusReg3 from "../../molecules/BusReg3";
import BusReg4 from "../../molecules/BusReg4";

export default class index extends Component {
    state = {
        step: 1,

        //step1
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        businessType: "",
        password: "",

        //step2
        address: "",

        //step3
        description: "",

        //step4
        hours: "",
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
            companyName,
            email,
            businessType,
            password,
            address,
            description,
            hours,
        } = this.state;

        if (step === 1) {
            return (
                <BusReg1
                    firstName={firstName}
                    lastName={lastName}
                    companyName={companyName}
                    email={email}
                    businessType={businessType}
                    password={password}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                />
            );
        }
        if (step === 2)
            return (
                <BusReg2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    address={address}
                />
            );
        if (step === 3)
            return (
                <BusReg3
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    description={description}
                />
            );
        if (step === 4)
            return (
                <BusReg4
                    firstName={firstName}
                    lastName={lastName}
                    companyName={companyName}
                    email={email}
                    businessType={businessType}
                    address={address}
                    description={description}
                    prevStep={this.prevStep}
                />
            );
    };

    render() {
        return <div className="BusinessReg-content">{this.showStep()}</div>;
    }
}
