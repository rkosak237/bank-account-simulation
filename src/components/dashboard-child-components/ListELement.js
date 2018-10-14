import * as React from 'react';

const ListElement = () => {
    return (
        <li className="list__element">
            <span>29.06</span>
            <span>Gas station Shell, Woloska Street</span>
            <select>
                <option value="">gas</option>
                <option value="">food</option>
                <option value="">fun</option>
            </select>
            <span>-100,00 PLN</span>
        </li>
    )
}
;

export default ListElement;