import * as React from 'react';
import Header from "../components/header/Header";
import Content from '../components/dashboard-child-components/Content';
import Proptypes from 'prop-types';

//redux
import * as actions from './../actions/fetchActions';
import { connect } from "react-redux";

class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSummary();
        this.props.fetchHistory();
        this.props.fetchProducts();
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}

Desktop.proptypes = {
    fetchSummary: Proptypes.func.isRequired,
    fetchHistory: Proptypes.func.isRequired,
    fetchProducts: Proptypes.func.isRequired,
}

export default connect(
    null, actions)(Desktop);