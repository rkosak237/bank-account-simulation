import * as React from 'react';

const SelectCategory = ({ changeSelect, valueSelect }) => (
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
export default SelectCategory;