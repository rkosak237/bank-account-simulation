import * as React from 'react';

const Transfer = () => (
    <div className="main__container">
            <section className="transfer-card border">
                <div className="transfer-card__wrapper">
                    <span className="previous-page">Arrow</span>
                    <div className="transfer__select-container">
                    </div>
                    <div className="transfer-card__content-grid">
                        <div className="transfer__add-account">
                            <span className="add-account__icon"></span>
                            <p>Add the account from which you draw funds</p>
                        </div>
                        <div className="transfer__content">
                            <p className="aside__text">Type</p>
                            <ul className="aside__container type__list">
                                <li className="type__list-item">Country</li>
                                <li className="type__list-item">Own</li>
                                <li className="type__list-item">Currency</li>
                                <li className="type__list-item">ZUS</li>
                                <li className="type__list-item">TAX</li>
                                <li className="type__list-item">GSM</li>
                            </ul>
                        </div>
                        <div className="transfer__content">
                            <p className="aside__text">Recipent</p>
                            <div className="aside__container">
                                <input type="text" className="recipent__input"/>
                            </div>
                        </div>
                        <div className="transfer__content">
                            <p className="aside__text">Where</p>
                            <div className="aside__container">
                                <input type="text" className="recipent__input"/>
                            </div>
                        </div>
                        <div className="transfer__content">
                            <p className="aside__text">Number</p>
                            <div className="aside__container">
                                <input type="text" className="recipent__input"/>
                            </div>
                        </div>
                        <div className="transfer__content">
                            <p className="aside__text">Sum</p>
                            <div className="aside__container">
                                <input type="text" className="recipent__input"/>
                            </div>
                        </div>
                        <div className="transfer__content">
                            <p className="aside__text">When</p>
                            <div className="aside__container">
                                <input type="text" className="recipent__input"/>
                            </div>
                        </div>
                        <div className="transfer__content">
                            <p className="aside__text">Title</p>
                            <div className="aside__container">
                                <input type="text" className="recipent__input"/>
                            </div>
                        </div>
                        <div className="transfer__content">
                            <p className="aside__text">Type of transfer</p>
                            <div className="aside__container">
                                <input type="text" className="recipent__input"/>
                            </div>
                        </div>
                        <div className="transfer__add-account">
                            <button className="btn">Continue</button>
                        </div>
                    </div>
                </div>
            </section>
    </div>
);

export default Transfer;