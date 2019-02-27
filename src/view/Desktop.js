import * as React from 'react';
import Content from '../components/dashboard-child-components/Content';
import Proptypes from 'prop-types';
import Loading from '../components/dashboard-child-components/Loading';

//redux
import * as actions from './../actions/fetchActions';
import { connect } from "react-redux";

class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRequest();
        this.props.fetchSummary();
        this.props.fetchHistory();
        this.props.fetchProducts();
    }

    render() {
        const { isFetching } = this.props;

        if (isFetching )
            return <Loading classes={isFetching ? "desktop-loading__bg" : "desktop-loading__bg fade-out"}/>

        return (
            <div className="page">
                <Content />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isFetching: state.fetchItems.isFetching,
    itemsHistory: state.fetchItems.itemsHistory,
    itemsProducts: state.fetchItems.itemsProducts,
    itemsSummary: state.fetchItems.itemsSummary
})

Desktop.proptypes = {
    fetchSummary: Proptypes.func.isRequired,
    fetchHistory: Proptypes.func.isRequired,
    fetchProducts: Proptypes.func.isRequired,
    fetchRequest: Proptypes.func.isRequired
}

export default connect(
    mapStateToProps, actions)(Desktop);