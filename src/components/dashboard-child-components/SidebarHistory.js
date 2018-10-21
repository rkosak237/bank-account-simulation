import * as React from 'react';
import ListElement from './ListELement';

class SidebarHistory extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        historyBills: [],
        isLoading: false
    }
}
    componentDidMount() {
        this.setState({isLoading: true});
        this.fetchHistory();
    }


    fetchHistory = () => {
        const endpoint = 'https://efigence-camp.herokuapp.com/api/data/history';

        fetch(endpoint)
            .then(rawData => rawData.json())
            .then(data => this.setState(prevState => ({
                historyBills: [...prevState.historyBills, ...data.content],
                isLoading: false
            }))
        );
    }

    render() {
        const { historyBills } = this.state;
        const filtered = historyBills
        .map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index);
        return (
            <section className="content__sidebar sidebarHistory">
                <h3 className="sidebar__title">History</h3>
                <div className="sidebarHistory__wrapper">
                        <ul className="sidebarHistory__list">
                            {historyBills.map(bill =>
                                <ListElement
                                key={bill.id}
                                array={filtered}
                                {...bill}
                            />)}
                        </ul>
                </div>
            </section>
        );
    }
};

export default SidebarHistory;







