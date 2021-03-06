import * as React from 'react';
import { EnvelopeIcon, SettingsIcon } from "../../assets/svgInTag/svg";

const iconSize = '2rem';

const AccountInfo = () => (
  <div className="header__account">
    <div className="header__logo">
      <p>Logo</p>
    </div>
    <div className="account__profile-img">
      <p>profile IMG</p>
    </div>
    <div className="account__user">
      <h3>John Doe</h3>
      <div className="account__settings">
        <EnvelopeIcon classes={"settings__box"} />
        <SettingsIcon classes={"settings__box"} />
      </div>
    </div>
  </div>
);
export default AccountInfo;