import React, { useState } from "react";
import "./App.css";
import Button from "./components/atoms/Button";
// import TextField from "./components/atoms/TextField";
import BusinessSignIn from "./components/organisms/BusinessSignIn";
import BusinessReg from "./components/organisms/BusinessReg";
import { Validators } from "./components/atoms/Validator/Validator";
import BusReg2 from "./components/molecules/BusReg2";

function App() {
    const [value, setValue] = useState("");

    const handleChange = (value) => {
        console.log(value);
        setValue(value);
    };
    return (
        <div className="App">
            {/* <BusinessSignIn /> */}
            {/* <BusReg2 /> */}
            <BusinessReg />
        </div>
    );
}

export default App;
