import * as React from 'react';
import LineChart from '../components/dashboard-child-components/LineChart';
import DoughnutChart from '../components/dashboard-child-components/DoughnutChart';
import Summary from '../components/dashboard-child-components/Summary';
import QuickPayments from '../components/dashboard-child-components/QuickPayments';
import Products from '../components/dashboard-child-components/Products';
import SidebarHistory from '../components/dashboard-child-components/SidebarHistory';
import Header from '../components/global/Header';

class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: true
        }
    }
    render() {

        return (
        <div>
            <Header />
            <div className="main__container">
                <div className="main__grid">
                    <QuickPayments/>
                    <Summary />
                    {
                    this.state.info ?
                    <DoughnutChart /> :
                    <LineChart />
                    }
                    <section className="desktop__content">
                        <Products />
                        <SidebarHistory/>
                    </section>
                </div>
            </div>
        </div>
    );
    }
}

export default Desktop;