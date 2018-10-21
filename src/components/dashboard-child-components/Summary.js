import * as React from 'react';
import { Link } from 'react-router-dom';

class Summary extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        items: {},
        isLoading: false
    }
}
    componentDidMount() {
        this.setState({isLoading: true});
        this.fetchSummary();
    }

    fetchSummary = () => {
        const endpoint = 'https://efigence-camp.herokuapp.com/api/data/summary';

        fetch(endpoint)
            .then(rawData => rawData.json())
            .then(data => this.setState(prevState => ({
                items: data.content[0],
                isLoading: false
            }))
        );
    }

    render() {
        const { isLoading, items } = this.state;
        const { balance, funds, payments} = this.state.items;
        return (
            <div className="summary">
                <div className="summary__preview">
                    <div>
                        <h2>Balance</h2>
                        <span className="preview__text"> <b>
                        {isLoading ? `Loading...` : balance}</b> PLN</span>
                    </div>
                    <div>
                        <h2>Available funds</h2>
                        <span className="preview__text"> <b>
                        {isLoading ? `Loading...` : funds}</b> PLN</span>
                    </div>
                    <div>
                        <h2>Scheduled payments</h2>
                        <span className="preview__text"> <b>
                        {isLoading ? `Loading...` : payments}</b> PLN</span>
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

export default Summary;