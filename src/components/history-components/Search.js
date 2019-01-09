import * as React from 'react';

const Search = ({onChange, value}) => (
    <div className="inputs__element search ">
        <label className="history__label" htmlFor="">Search</label>
        <input
        className="search__input"
        onChange={onChange}
        value={value}
        type="text"/>
    </div>
);
export default Search;