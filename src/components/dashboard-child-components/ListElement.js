import * as React from 'react';
import uuid from 'uuid';

export default (
    { date,
    description,
    category,
    amount,
    currency,
    status,
    array }
    ) => {
    return (
        <li className="listElement">
            <div className="listElement__date">{date}</div>
            <div className="listElement__text-wrapper">
                <p className="listElement__text">
                    {description}
                </p>
            </div>
            <div className="listElement__category">
                <select className="category__select">
                    <option value="Show all">{category}</option>
                    {array.filter(value => value !== category)
                        .map(item =>
                            <option
                            key={uuid()}
                            value={category}>{item}</option>
                        )
                    }
                </select>
            </div>
            <div className="listElement__amount">
                <span className={status == `income` ? `listElement__amount--income` : `listElement__amount--outcome`}>
                {status == 'income' ? amount : -amount} {currency}
                </span>
            </div>
        </li>
    )
};