import * as React from 'react';

//components
import Header from "../components/header/Header";
import ListElement from '../components/dashboard-child-components/ListElement';
import Search from '../components/history-components/Search';
import SelectContainer from '../components/history-components/SelectContainer';

//selector
import filterExpenses  from '../selectors/filters';

//redux
import { connect } from 'react-redux';
import { filterCategory, filterDescription, filterStatus } from '../actions/filters';

//router
import { Redirect } from "react-router-dom";

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
        const { filters, auth } = this.props;
        const historyBills = this.props.fetchItems;
        const filtered = historyBills
        .map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index);

        if (!auth.uid) return <Redirect to="/" />

        return (

        <div>
            <div className="main__container fade-in page">

              <div className="history-grid main__grid history">
                <h1 className="c__title">History</h1>

                <div className="inputs__container">
                    <Search
                    onChange={this.handleChangeSearch}
                    value={filters.description} />

                    <SelectContainer
                    changeSelect={this.handleChangeSelect}
                    valueSelect={filters.category}
                    changeStatus={this.handleChangeSelectStatus}
                    valueStatus={filters.status} />
                </div>

              </div>
              <section className="list history__list">

                <div className="list__titles">
                    <p className="title">Date</p>
                    <p className="title">Details</p>
                    <p className="title">Category</p>
                    <p className="title">Amount</p>
                </div>

                <div>
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
                </div>

              </section>
            </div>
          </div>
        )
}
}
const mapStateToProps = state => ({
    fetchItems: filterExpenses(state.fetchItems.itemsHistory, state.filters),
    filters: state.filters,
    auth: state.firebase.auth
})


export default connect(mapStateToProps)(History);