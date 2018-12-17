import * as React from 'react';
import Input from './Input';

const LogIn = ({
        form,
        email,
        userNameInBase,
        validationError,
        showErrors,
        handleChange,
        handleSubmit,
    }) => (
    <form className="LogIn__form">
            <Input
                label={"E-mail"}
                classes={"LogIn__input"}
                name={"emailReceived"}
                minLength={6}
                type={"email"}
                onChange={handleChange}
                value={email}
                />
            <Input
                label={"Password"}
                classes={"LogIn__input"}
                name={"passwordReceived"}
                minLength={6}
                type={"password"}
                onChange={handleChange}
                value={email}
                />
        <div className="buttons-container">
            <button
            onClick={handleSubmit}
            className="btn">Log in</button>
            <button className="btn btn--bg-transparent">Forgoten password?</button>
        </div>
    </form>
);

export default LogIn;