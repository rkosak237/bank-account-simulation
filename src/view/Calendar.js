import * as React from 'react';

import uuid from 'uuid';
import Header from '../components/global/Header';

class Calendar extends React.Component {



    render() {
        return (
            <div>
                <Header />
                <div className="main__container">
                    <div className="main__grid">
                        <h1>Calendar</h1>
                    </div>
                </div>
            </div>
        )
    }
}



export default Calendar;