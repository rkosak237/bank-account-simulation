import * as React from 'react';
import SelectCategory from './SelectCategory';
import SelectStatus from './SelectStatus';

const SelectContainer = ({
        changeSelect,
        valueSelect,
        changeStatus,
        valueStatus
    }) => (
    <div className="inputs__element">
        <label className="history__label" htmlFor="">Filter by</label>
        <SelectCategory
            changeSelect={changeSelect}
            valueSelect={valueSelect}
        />
        <SelectStatus
            changeStatus={changeStatus}
            valueStatus={valueStatus}
        />
    </div>
);
export default SelectContainer;