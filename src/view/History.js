import * as React from 'react';
import ListElement from '../components/dashboard-child-components/ListELement';
import uuid from 'uuid';
import { connect } from 'react-redux';
import filterExpenses  from '../selectors/filters';
import { filterCategory, filterDescription, filterStatus } from '../actions/filters';

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
            <div className="main__container">
            <div className="h-l-grid main__grid">
                <h1 className="h-c__title">History</h1>
                <div className="h-l-inputs__container">
                    <div className="inputs__element">
                        <label className="h-l__label" htmlFor="">Search</label>
                        <input
                        className="h-l_search"
                        onChange={this.handleChangeSearch}
                        value={filters.description}
                        type="text"/>
                    </div>
                    <div className="inputs__element">
                        <label className="h-l__label" htmlFor="">Filter by</label>
                        <select
                        onChange={this.handleChangeSelect}
                        value={filters.category}
                        className="h-l__select">
                            <option value="Show all">Show all</option>
                            {
                                filtered
                                .map(item =>
                                    <option
                                    key={uuid()}
                                    value={item}>{item}</option>
                                )
                            }
                    </select>
                    <select
                        onChange={this.handleChangeSelectStatus}
                        value={filters.status}
                        className="h-l__select">
                            <option value="Show all">Show all</option>
                            <option value="Income">Income</option>
                            <option value="Outcome">Outcome</option>
                    </select>
                    </div>
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
    )
}
}
const mapStateToProps = state => ({
    fetchItems: filterExpenses(state.fetchItems.itemsHistory, state.filters),
    filters: state.filters
})


export default connect(mapStateToProps)(History);