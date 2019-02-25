import * as React from 'react';
import Product from '../components/landing-page/Product';
import Overview from '../components/landing-page/Overview';
import Version from '../components/landing-page/Version';
import Newsletter from '../components/landing-page/Newsletter';
import Footer from '../components/global/Footer';
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
          <section className="clients full-width">
            <div className="clients__grid grid-centered">
              <div className="clients__content col-10">
                <div className="clients__img">
                </div>
                <div className="clients__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                    <b>- Gutenberg
                    Operations Manager</b>
                </div>
              </div>
            </div>
          </section>
          <Footer />
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