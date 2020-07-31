import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TextField.scss";

import { validateInput } from "../Validator/Validator";

const TextField = ({ name, value, label, placeholder, validators, type, onChange }) => {
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const { value } = event.target;
        setError(validateInput(validators, value));
        onChange(value);
    };

    return (
        <div className="text-field-content">
            {type === "textarea" ? (
                <textarea
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    defaultValue={value}
                    onChange={handleChange}
                />
            ) : (
                <input
                    name={name}
                    type={type}
                    value={value}
                    className="form-control"
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            )}
            {error && <p className="error-message">{error.message}</p>}
        </div>
    );
};

TextField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
    name: "text",
    value: "",
    label: "",
    placeholder: "",
    type: "text",
    validators: [],
};

export default TextField;
