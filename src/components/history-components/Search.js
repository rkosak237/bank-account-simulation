import * as React from 'react';

const Search = ({onChange, value}) => (
    <div className="inputs__element search ">
        <label className="h-l__label" htmlFor="">Search</label>
        <input
        className="h-l__search"
        onChange={onChange}
        value={value}
        type="text"/>
    </div>
);
export default Search;