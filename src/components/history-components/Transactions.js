import * as React from 'react';

//components
import ListElement from '../dashboard-child-components/ListElement';

//redux
import { connect } from 'react-redux';

//selector
import filterExpenses from '../../selectors/filters';

class Transactions extends React.Component {

  render() {

    const historyBills = this.props.fetchItems;
    const filtered = historyBills
        .map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index);
    return (
        <div className="list__container">
            <ul className="list__transactions">
                {historyBills.map(bill => (
                    <ListElement
                        key={bill.id}
                        array={filtered}
                        {...bill}
                    />
                ))}
            </ul>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    fetchItems: filterExpenses(state.fetchItems.itemsHistory, state.filters),
})


export default connect(mapStateToProps)(Transactions);