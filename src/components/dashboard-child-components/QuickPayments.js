import * as React from 'react';
import Button from '../global/Button';

export default () => (
  <div className="quick-payments">
    <h1 className="quick-payments__title">Finance life stream</h1>
    <div className="quick-payments__btns-container">
      <Button text={"Add"} />
      <Button text={"BANK"} />
      <Button text={"PAYMENT"} />
    </div>
  </div>
);
