import React, { useState, useRef } from 'react'
import TextField from '@mui/material/TextField';
import isEmail from 'validator/lib/isEmail';

const EmailField = (props) => {
    const [isValid, setIsValid] = useState(false);
    const [dirty, setDirty] = useState(false);
    const valueRef = useRef('');

    const handleChange = event => {
        const val = event.target.value;

        if (isEmail(val)) {
            setIsValid(true);
            props.enteredEmail(valueRef.current.value)
        } else {
            setIsValid(false);
        }
    }

    return (
        <TextField
            error={dirty && isValid === false}
            onBlur={() => setDirty(true)}
            id={props.fieldName}
            label={props.label}
            name={props.fieldName}
            variant="outlined"
            className={props.className}
            inputRef={valueRef}
            onChange={(e) => handleChange(e)}
        />
    )
}

export default EmailField;