import * as React from 'react';
import { connect } from 'react-redux';

const Input = ({
        classes,
        name,
        placeholder,
        type,
        onChange,
        fullName,
        minLength = 2,
        label
    }) => (
    <div className="LogIn__wrapper">
        <label className="LogIn__label">{label}</label>
        <input
            className={classes}
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={fullName}
            minLength={minLength}
            required/>
            <span className="LogIn__error">blabla</span>
    </div>
);

const mapStateToProps = state => ({
    form: state.form
})


export default connect(mapStateToProps)(Input);