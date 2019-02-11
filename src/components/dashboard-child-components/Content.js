import * as React from 'react';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';
import Summary from './Summary';
import QuickPayments from './QuickPayments';
import Products from './Products';
import SidebarHistory from './SidebarHistory';

//redux
import { connect } from "react-redux";
//router
import { Redirect } from "react-router-dom";

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
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to="/" />

        return (
          <div className="main__container fade-in">
            <div className="main__grid">
              <QuickPayments />
              <Summary changeChart={this.onClick} />
              {this.state.showLineChart ? (
                <LineChart />
              ) : (
                <DoughnutChart />
              )}
              <section className="desktop__content">
                <Products />
                <SidebarHistory />
              </section>
            </div>
          </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};
export default connect(
    mapStateToProps)(Content);