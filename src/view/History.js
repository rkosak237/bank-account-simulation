import * as React from 'react';
import ListElement from '../components/dashboard-child-components/ListELement';
import uuid from 'uuid';
import { connect } from 'react-redux';
import filterExpenses  from '../selectors/filters';
import { filterCategory, filterDescription, filterStatus } from '../actions/filters';
import Search from '../components/history-components/Search';
import SelectContainer from '../components/history-components/SelectContainer';
import Header from '../components/global/Header';

class History extends React.Component {

    handleChangeSelect = (e) => {
        const { dispatch } = this.props;
        dispatch(filterCategory(e.target.value));
        e.preventDefault();
    }

    handleChangeSelectStatus = (e) => {
        const { dispatch } = this.props;
        dispatch(filterStatus(e.target.value));
        e.preventDefault();
    }

    handleChangeSearch = (e) => {
        const { dispatch } = this.props;
        dispatch(filterDescription(e.target.value));
        e.preventDefault();
    }


    render() {
        const { filters } = this.props;
        const historyBills = this.props.fetchItems;
        const filtered = historyBills
        .map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index);

        return (
            <div>
                <Header />
                    <div className="main__container">
                    <div className="h-l-grid main__grid">
                        <h1 className="h-c__title">History</h1>
                        <div className="h-l-inputs__container">
                            <Search
                                onChange={this.handleChangeSearch}
                                value={filters.description}/>
                            <SelectContainer
                                changeSelect={this.handleChangeSelect}
                                valueSelect={filters.category}
                                changeStatus={this.handleChangeSelectStatus}
                                valueStatus={filters.status}/>
                        </div>
                    </div>
                    <div className="h-l-grid--column">
                        <div className="h-l__titles">
                            <p className="title">Date</p>
                            <p className="title">Details</p>
                            <p className="title">Category</p>
                            <p className="title">Amount</p>
                        </div>
                        <div className="h-l__list">
                            <div className="history__wrapper">
                            <div className="history__list">
                                <ul className="list">
                                    {historyBills.map(bill =>
                                        <ListElement
                                        key={bill.id}
                                        array={filtered}
                                        {...bill}
                                    />)}
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
}
const mapStateToProps = state => ({
    fetchItems: filterExpenses(state.fetchItems.itemsHistory, state.filters),
    filters: state.filters
})


export default connect(mapStateToProps)(History);