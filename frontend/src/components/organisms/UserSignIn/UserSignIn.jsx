import React, { Component } from "react";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
import { Validators } from "../../atoms/Validator/Validator";
import history from "../../history";
import "./UserSignIn.scss";

export class UserSignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = (key) => (value) => {
        this.setState({ [key]: value });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="UserSignIn-content">
                <h1 className="sign-in">Sign In</h1>
                <TextField
                    name="email"
                    value={email}
                    type="email"
                    placeholder="Email Address *"
                    validators={[{ check: Validators.email, message: "Email not valid" }]}
                    onChange={this.handleChange("email")}
                />
                <TextField
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password *"
                    validators={[{ check: Validators.required, message: "Password is required" }]}
                    onChange={this.handleChange("password")}
                />
                <Button className="log-in-button" buttonStyle="btn--primary-square">
                    Log In
                </Button>
                <p className="no-account">Don't have an account?</p>
                <form>
                    <Button buttonStyle="btn-noformat" onClick={() => history.push("/UserReg")}>
                        SignUp
                    </Button>
                </form>
            </div>
        );
    }
}

export default UserSignIn;
