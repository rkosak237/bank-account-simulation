import * as React from 'react';
import Type from './Type';
import Details from './Details';
import Sender from './Sender';

export default () => (
    <section className="transfer-card">
        <div className="transfer-card__grid">
            <Sender/>
            <Details />
            <Type />
            <div className="transfer__add-account">
                <button className="btn">Send Cash</button>
            </div>
        </div>
    </section>
);