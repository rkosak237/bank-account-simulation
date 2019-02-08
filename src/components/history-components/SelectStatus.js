import * as React from 'react';

export default ({ changeStatus, valueStatus }) => (
  <select
    className="history__filter select-status"
    onChange={changeStatus}
    value={valueStatus}
  >
    <option value="">Show all</option>
    <option value="Income">Income</option>
    <option value="Outcome">Outcome</option>
  </select>
);