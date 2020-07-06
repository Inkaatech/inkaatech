import React, { Component } from "react";
import Button from "../../atoms/Button";
import history from "../../history";
import "./UserReg1.scss";

export default class UserReg1 extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };
    // handleChange = (input) => (e) => {
    //     this.setState({ [input]: e.target.value });
    // };
    render() {
        const { firstName, lastName, email, password, handleChange } = this.props;
        return (
            <div className="UserReg1-content">
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
                    <br />
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder="Last Name"
                        onChange={handleChange("lastName")}
                    />
                    <br />
                    <input
                        required
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email Address"
                        onChange={handleChange("email")}
                    />
                    <br />
                    <input
                        required
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        onChange={handleChange("password")}
                    />
                    <br />
                </form>
                <Button className="sign-up-button" buttonStyle="btn--primary-square" onClick={this.continue}>
                    Continue
                </Button>
                <p className="question-signup">Already have an account? </p>
                <form>
                    <Button buttonStyle="btn-noformat" onClick={() => history.push("/UserSignIn")}>
                        Sign In
                    </Button>
                </form>
            </div>
        );
    }
}
