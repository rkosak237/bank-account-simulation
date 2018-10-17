import * as React from 'react';
import uuid from 'uuid';

const ListElement = (
    {date,
    description,
    category,
    amount,
    currency,
    status,
    array}
    ) => {
        return (
            <li className="list__item">
                <div className="item__date">{date}</div>
                <div className="item__description">
                    <p className="description__text">
                        {description}
                    </p>
                </div>
                <div className="item__category">
                    <select className="category__select">
                        <option value="">{category}</option>
                        {array.filter(value => value !== category)
                            .map(item =>
                                <option
                                key={uuid()}
                                value="">{item}</option>
                            )
                        }
                    </select>
                </div>
                <div className="item__amount">
                    <span className={status == `income` ? `item__amount--income` : `item__amount--outcome`}>
                    {status == 'income' ? amount : -amount} {currency}
                    </span>
                </div>
            </li>
        )
    };

export default ListElement;