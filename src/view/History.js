import * as React from 'react';

const History = () => {

    return (
        <div className="main__container">
            <div className="h-l-grid">
                <h1 className="h-c__title">History</h1>
                <div className="h-l-inputs__container">
                    <div className="inputs__element">
                        <label className="h-l__label" htmlFor="">Search</label>
                        <input className="h-l_search" type="text"/>
                    </div>
                    <div className="inputs__element">
                        <label className="h-l__label" htmlFor="">Filter by</label>
                        <select className="h-l__select" name="" id="">
                            <option value="">a</option>
                            <option value="">b</option>
                            <option value="">c</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="h-l-grid--column">
                <div className="h-l__titles">
                    <p className="title">Date</p>
                    <p className="title">Details</p>
                    <p className="title">Category</p>
                    <p className="title">Amount</p>
                </div>
                <div className="h-l__list">
                    <div className="history__wrapper">
                    <div className="history__list">
                        <ul className="list">
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
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default History;