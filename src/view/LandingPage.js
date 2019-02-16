import * as React from 'react';
import Product from '../components/landing-page/Product';
import Overview from '../components/landing-page/Overview';
import Version from '../components/landing-page/Version';
import Newsletter from '../components/landing-page/Newsletter';

//redux
import { connect } from "react-redux";

//router
import { Redirect } from "react-router-dom";

class LandingPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/desktop" />

    return (
      <div className="page">
        <div className="main__container">
          <Product />
          <Overview />
          <Version />
          <Newsletter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
})

export default connect(
  mapStateToProps)(LandingPage);