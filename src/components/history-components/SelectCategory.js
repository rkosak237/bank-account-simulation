import * as React from 'react';

export default ({ changeSelect, valueSelect }) => (
  <select
    className="history__filter"
    onChange={changeSelect}
    value={valueSelect}
  >
    <option value="">Show all</option>
    <option value="Gas">Gas</option>
    <option value="Food">Food</option>
    <option value="Cash">Cash</option>
  </select>
);