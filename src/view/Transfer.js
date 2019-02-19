import * as React from 'react';

//redux
import { connect } from "react-redux";

//router
import { Redirect } from "react-router-dom";
import TransferTypes from '../components/transfer/TransferTypes';
import Form from '../components/transfer/Form';

class Transfer extends React.Component {

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />

  return (
  <div>
    <div className="main__container fade-in page">
      <h1 className="c__title">Transfer</h1>
      <Form/>
      {/* <TransferTypes /> */}
    </div>
  </div>
    );
  }
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
});
export default connect(
  mapStateToProps)(Transfer);