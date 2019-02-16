import * as React from 'react';
import Header from "../components/header/Header";
import Content from '../components/dashboard-child-components/Content';
import Proptypes from 'prop-types';
import Loading from '../components/dashboard-child-components/Loading';

//redux
import * as actions from './../actions/fetchActions';
import { connect } from "react-redux";

class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }



    componentDidMount() {
        this.props.fetchSummary();
        this.props.fetchHistory();
        this.props.fetchProducts();
    }

    render() {
        const { isLoading } = this.state;

        if (isLoading)
            return <Loading classes={isLoading ? "desktop-loading__bg" : "desktop-loading__bg fade-out"}/>

        return (
            <div className="page">
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