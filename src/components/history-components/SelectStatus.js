import * as React from 'react';

const SelectStatus = ({
        changeStatus,
        valueStatus,
    }) => (
        <select
            className="h-l__select select-status"
            onChange={changeStatus}
            value={valueStatus}>
                <option value="">Show all</option>
                <option value="Income">Income</option>
                <option value="Outcome">Outcome</option>
        </select>
);
export default SelectStatus;