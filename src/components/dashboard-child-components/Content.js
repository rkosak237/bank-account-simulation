import * as React from 'react';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
import Summary from './Summary';
import QuickPayments from './QuickPayments';
import Products from './Products';
import SidebarHistory from './SidebarHistory';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showLineChart: true
        };
    }

    onClick = () => {
        this.setState(prevState => ({
            showLineChart: !prevState.showLineChart
        }));
    }

    render() {

        return (
            <div className="main__container">
                <div className="main__grid">
                    <QuickPayments/>
                    <Summary
                        changeChart={this.onClick}
                    />
                    {
                    this.state.showLineChart ?
                        <LineChart /> :
                        <DoughnutChart />
                    }
                    <section className="desktop__content">
                        <Products />
                        <SidebarHistory/>
                    </section>
                </div>
            </div>
    );
    }
}

export default Content;

