import * as React from 'react';

export default () => (
    <div className="transfer__content">
        <p className="aside__text">Type of transfer</p>
        <div className="aside__container">

            <div className="transfer__content">
                <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer"
                />
                <label className="radio__label">
                    <b>Normaly</b>
                    <br />
                    About 7 days
        </label>
            </div>

            <div className="transfer__content">
                <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer"
                />
                <label className="radio__label">
                    <b>Express Eliksir</b>
                    <br />
                    15 min
        </label>
            </div>

            <div className="transfer__content">
                <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer"
                />
                <label className="radio__label">
                    <b>Sorbnet</b>
                    <br />2 hours
        </label>
            </div>
        </div>
    </div>
);