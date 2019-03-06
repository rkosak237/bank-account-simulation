import * as React from 'react';
import Input from './Input';
import { Link } from "react-router-dom";

export default ({ email, handleChange, handleSubmit, password }) => (
  <form className="LogIn__form" onSubmit={handleSubmit}>
    <Input
      label={"E-mail"}
      classes={"LogIn__input"}
      name={"email"}
      minLength={5}
      type={"email"}
      onChange={handleChange}
      value={email}
      autocomplete={"email"}
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