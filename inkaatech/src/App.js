import React, { useState } from "react";
import "./App.css";
import Button from "./components/atoms/Button";
import TextField from "./components/atoms/TextField";
import BusinessSignIn from "./components/organisms/BusinessSignIn";
import { Validators } from "./components/atoms/Validator/Validator";

function App() {
    const [value, setValue] = useState("");

    const handleChange = (value) => {
        console.log(value);
        setValue(value);
    };
    return (
        <div className="App">
            <BusinessSignIn />
        </div>
    );
}

export default App;
