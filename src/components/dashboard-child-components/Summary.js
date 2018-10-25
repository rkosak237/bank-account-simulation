import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSummary } from '../../actions/fetchActions';

class Summary extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        isLoading: false
    }
}
    componentDidMount() {
        this.props.fetchSummary();
    }


    render() {
        const { isLoading } = this.state;
        const { balance, funds, payments} = this.props.summary;
        console.log(this.props.summary);
        return (
            <div className="summary">
                <div className="summary__preview">
                    <div>
                        <h2>Balance</h2>
                        <span className="preview__text"> <b>
                        {isLoading ? `Loading...` : balance}
                        </b> PLN</span>
                    </div>
                    <div>
                        <h2>Available funds</h2>
                        <span className="preview__text"> <b>
                        {isLoading ? `Loading...` : funds}
                        </b> PLN</span>
                    </div>
                    <div>
                        <h2>Scheduled payments</h2>
                        <span className="preview__text"> <b>
                        {isLoading ? `Loading...` : payments}
                        </b> PLN</span>
                        <Link to="/Transfer">
                            <button className="btn payment__btn">FAST PAY</button>
                        </Link>
                    </div>
                </div>
                <div className="summary__analysis">
                    <div className="toggle">
                        <input type="checkbox" />
                        <span className="toggle__btn"></span>
                        <span className="toggle__label"></span>
                        <span className="toggle__bg"></span>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    summary: state.summary.itemsSummary
})

export default connect(mapStateToProps, { fetchSummary })(Summary);