import React, {PropTypes} from 'react';
import {getNextId} from "./id-creator";

const Input = (props) => {

    let id = getNextId();

    function onChange(e) {
        props.onChange(e.target.value);
    }

    return (
        <label htmlFor={id}>
            {props.label}
            <input
                type={props.type}
                value={props.value}
                onChange={onChange}
                placeholder={props.placeholder}
                id={id}/>
        </label>

    );
}

Input.propTypes = {
    type: PropTypes
        .oneOf(['text', 'number'])
        .isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.placeholder,
    onChange: PropTypes.func.isRequired
}

export default Input;