import * as React from 'react';

//components
import Search from '../components/history-components/Search';
import SelectContainer from '../components/history-components/SelectContainer';

//redux
import { connect } from 'react-redux';
import { filterCategory, filterDescription, filterStatus } from '../actions/filters';

//router
import { Redirect } from "react-router-dom";
import List from '../components/history-components/List';

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
              <List />
            </div>
          </div>
        );
    }
}
const mapStateToProps = state => ({
    filters: state.filters,
    auth: state.firebase.auth
})


export default connect(mapStateToProps)(History);