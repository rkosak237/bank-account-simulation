import * as React from 'react';

import ListTitles from './ListTitles';
import Transactions from './Transactions';

export default () => (
    <section className="list history__list">
    <ListTitles />
    <Transactions />
    </section>
);