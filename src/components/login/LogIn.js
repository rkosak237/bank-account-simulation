import * as React from 'react';
import Input from './Input';
import { Link } from "react-router-dom";

export default ({
  email,
  handleChange,
  handleSubmit,
  password,
  showErrors
}) => (
  <form className="LogIn__form" onSubmit={handleSubmit}>
    <span
      className={
        !showErrors ? "LogIn__error" :
        "LogIn__error LogIn__error--visible"}>

      {showErrors && `Data isn't correct. Check email and password, and try again`}
    </span>

    <Input
      label={"E-mail"}
      classes={"LogIn__input"}
      name={"email"}
      minLength={5}
      type={"email"}
      onChange={handleChange}
      value={email}
      autocomplete={"email"}
      showError={showErrors}
    />
    <Input
      label={"Password"}
      classes={"LogIn__input"}
      name={"password"}
      minLength={5}
      type={"password"}
      onChange={handleChange}
      value={password}
      autocomplete={"current-password"}
      showError={showErrors}
    />
    <div className="buttons-container">
      <button type="submit" className="btn">
        Log in
      </button>
      <Link to="/forgottenpassword">
        <button className="btn btn--bg-transparent">Forgoten password?</button>
      </Link>
    </div>
  </form>
);