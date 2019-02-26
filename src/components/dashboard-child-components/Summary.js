import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from "../global/Button";
import SwitchChart from './SwitchChart';

class Summary extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        isLoading: false,
    }
}

    render() {
        const { isLoading } = this.state;
        const { balance, funds, payments} = this.props.fetchItems;
        return (
          <article className="summary">
            <article className="summary__preview">
              <section className="summary__item">
                <h2>Balance</h2>
                <span className="summary__text">
                  {" "}
                  <b>{isLoading ? `Loading...` : balance}</b> PLN
                </span>
              </section>
              <section className="summary__item">
                <h2>Available funds</h2>
                <span className="summary__text">
                  {" "}
                  <b>{isLoading ? `Loading...` : funds}</b> PLN
                </span>
              </section>
              <section className="summary__item">
                <h2>Scheduled payments</h2>
                <span className="summary__text">
                  {" "}
                  <b>{isLoading ? `Loading...` : payments}</b> PLN
                </span>
                <Link to="/transfer">
                  <Button
                    classname={"btn payment__btn"}
                    text={"FAST PAY"}
                  />
                </Link>
              </section>
            </article>
            <SwitchChart
              event={this.props.changeChart}
            />
          </article>
        );
    }
};

const mapStateToProps = state => ({
    fetchItems: state.fetchItems.itemsSummary
});


export default connect(mapStateToProps)(Summary);