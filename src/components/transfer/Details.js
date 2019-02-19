import * as React from 'react';

export default () => (
    <div>
        <div className="transfer__content">
            <p className="aside__text">Recipent</p>
            <div className="aside__container">
                <input type="text" className="recipent__input" />
            </div>
        </div>
        <div className="transfer__content">
            <p className="aside__text">Where</p>
            <div className="aside__container">
            <div className="transfer__content">
                <input
                type="radio"
                className="recipent__input input--radio"
                name="transfer__destination"
                />
                <label className="radio__label">Account</label>
            </div>

            <div className="transfer__content">
                <input
                type="radio"
                className="recipent__input input--radio"
                name="transfer__destination"
                />
                <label className="radio__label">Facebook</label>
            </div>

            <div className="transfer__content">
                <input
                type="radio"
                className="recipent__input input--radio"
                name="transfer__destination"
                />
                <label className="radio__label">Phone</label>
            </div>

            <div className="transfer__content">
                <input
                type="radio"
                className="recipent__input input--radio"
                name="transfer__destination"
                />
                <label className="radio__label"> Email</label>
            </div>
            </div>
        </div>

        <div className="transfer__content">
            <p className="aside__text">Number</p>
            <div className="aside__container">
            <input type="text" className="recipent__input" />
            </div>
        </div>

        <div className="transfer__content">
            <p className="aside__text">Sum</p>
            <div className="aside__container">
            <input type="text" className="recipent__input" />
            </div>
        </div>

        <div className="transfer__content">
            <p className="aside__text">When</p>
            <div className="aside__container">
            <input type="text" className="recipent__input" />
            </div>
        </div>

        <div className="transfer__content">
            <p className="aside__text">Title</p>
            <div className="aside__container">
            <input type="text" className="recipent__input" />
            </div>
        </div>

    </div>
);