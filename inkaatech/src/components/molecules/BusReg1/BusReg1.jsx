import React, { Component } from "react";
// import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
// import { Validators } from "../../atoms/Validator/Validator";

export default class BusReg1 extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    // handleChange = (input) => (e) => {
    //     this.setState({ [input]: e.target.value });
    // };
    render() {
        const { firstName, lastName, companyName, email, businessType, password, handleChange } = this.props;
        return (
            <div className="BusReg1-content">
                <h2 className="sign-up">Sign Up</h2>
                <form className="step1">
                    <input
                        required
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleChange("firstName")}
                    />
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleChange("lastName")}
                    />
                    <input
                        required
                        type="text"
                        name="companyName"
                        value={companyName}
                        placeholder="Company Name"
                        onChange={handleChange("companyName")}
                    />
                    <input
                        required
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email Address"
                        onChange={handleChange("email")}
                    />
                    <input
                        required
                        type="text"
                        name="businessType"
                        value={businessType}
                        placeholder="Type of Business"
                        onChange={handleChange("businessType")}
                    />
                    <input
                        required
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange("password")}
                    />
                    <input type="submit" onClick={this.continue}></input>
                </form>
                {/* <Button className="sign-up-button" buttonStyle="btn--primary-square" onClick={this.continue}>
                    Continue
                </Button> */}
                <p>Already have an account? Sign In</p>
            </div>
        );
    }
}
