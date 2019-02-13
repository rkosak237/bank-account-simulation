import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from "../global/Button";

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
          <div className="summary">
            <div className="summary__preview">
              <div className="summary__item">
                <h2>Balance</h2>
                <span className="summary__text">
                  {" "}
                  <b>{isLoading ? `Loading...` : balance}</b> PLN
                </span>
              </div>
              <div className="summary__item">
                <h2>Available funds</h2>
                <span className="summary__text">
                  {" "}
                  <b>{isLoading ? `Loading...` : funds}</b> PLN
                </span>
              </div>
              <div className="summary__item">
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
              </div>
            </div>
            <div className="summary__analysis">
              <div className="toggle">
                <input
                  onClick={this.props.changeChart}
                  type="checkbox"
                />
                <span className="toggle__btn" />
                <span className="toggle__label" />
                <span className="toggle__bg" />
              </div>
            </div>
          </div>
        );
    }
};

const mapStateToProps = state => ({
    fetchItems: state.fetchItems.itemsSummary
});


export default connect(mapStateToProps)(Summary);