import * as React from 'react';

//redux
import { connect } from 'react-redux';

//router
import { Redirect } from "react-router-dom";

class ForgottenPassword extends React.Component {

    render() {
        const { filters, auth } = this.props;

        if (auth.uid) return <Redirect to="/desktop" />

        return (
            <div>
               <h1>Forgotten Password</h1>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    auth: state.firebase.auth
})


export default connect(mapStateToProps)(ForgottenPassword);