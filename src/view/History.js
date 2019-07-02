import * as React from 'react';

//components
import Search from '../components/history-components/Search';
import SelectContainer from '../components/history-components/SelectContainer';

//redux
import { connect } from 'react-redux';
import { filterCategory, filterDescription, filterStatus } from '../actions/filters';
import { debounce } from 'lodash';
//router
import { Redirect } from "react-router-dom";
import List from '../components/history-components/List';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionSearchTerm: '',
        }
    }
    
    componentWillUnmount = () => {
<<<<<<< HEAD
        this.setState({
=======
        tthis.setState({
>>>>>>> b3343252174681929618e61de20cba6d18ba9497
            descriptionSearchTerm: ''
        })
    } 
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

    handleChangeSearch = debounce((text) => {
        const { dispatch } = this.props;
        const { descriptionSearchTerm } = this.state;
        this.setState({
            descriptionSearchTerm: text
        })
        dispatch(filterDescription(descriptionSearchTerm));
    }, 250);


    render() {
        const { filters, auth } = this.props;

        if (!auth.uid) return <Redirect to="/" />

        return (
        <div>
            <div className="main__container fade-in page">

              <header className="history-grid main__grid history">
                <h1 className="c__title">History</h1>

                <div className="inputs__container">
                    <Search
                    handleSearch={this.handleChangeSearch}
                    value={this.state.descriptionSearchTerm} />

                    <SelectContainer
                    changeSelect={this.handleChangeSelect}
                    valueSelect={filters.category}
                    changeStatus={this.handleChangeSelectStatus}
                    valueStatus={filters.status} />
                </div>
              </header>
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