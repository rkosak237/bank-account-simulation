import * as React from 'react';
import Add from './Add';
import Previous from '../global/Previous';

export default () => (
    <div>
        <Previous />
        <div className="transfer__select-container" />
        <div className="transfer-card__content-grid">
            <Add />
        </div>
    </div>
);