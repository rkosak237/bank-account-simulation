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
        password
    }) => (
    <form
    className="LogIn__form"
    onSubmit={handleSubmit}>
            <Input
                label={"E-mail"}
                classes={"LogIn__input"}
                name={"email"}
                minLength={5}
                type={"email"}
                onChange={handleChange}
                value={email}
                />
            <Input
                label={"Password"}
                classes={"LogIn__input"}
                name={"password"}
                minLength={5}
                type={"password"}
                onChange={handleChange}
                value={password}
                />
        <div className="buttons-container">
            <button
            type="submit"
            className="btn">Log in</button>
            <button className="btn btn--bg-transparent">Forgoten password?</button>
        </div>
    </form>
);

export default LogIn;