import * as React from 'react';

export default ({handleSearch, value}) => (
    <div className="inputs__element search ">
        <label className="history__label" htmlFor="">Search</label>
        <input
        className="search__input"
        onChange={(e) => {
            e.persist();
            handleSearch(e.target.value)}}
        // value={value}
        type="text"/>
    </div>
);