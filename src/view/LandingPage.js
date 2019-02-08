import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '../components/global/Button';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
          <div>
            <div className="main__container">
              <section className="lp-product lp-product--gradient-bg section-centered">
                <div className="main__grid lp-product__grid">
                  <div className="lp-product__content">
                    <h1 className="lp-product__title lp-product__title--light">
                      As right as rain
                    </h1>
                    <p className="lp-product__text">
                      New banking experience in your smartphone. Track
                      your costs on charts, check your current balance,
                      send transfer by 4 clicks. <br /> Simple - thats
                      how it should be. 👍
                    </p>

                    <div className="lp-product__buttons-container">
                      <Link to="/login">
                        <Button text={"Login"} />
                      </Link>
                      <Link to="/regiester">
                        <Button text={"Regiester"} />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <section className="lp-overview section-centered">
                <div className="main__grid lp-overview__grid">
                  <div className="lp-overview__content">
                    <h2>Value #1 🚀 </h2>
                    <p className="lp-overview__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="lp-overview__content">
                    <h2>Value #2 🎯</h2>
                    <p className="lp-overview__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                  <div className="lp-overview__content">
                    <h2>Value #3 🏆</h2>
                    <p className="lp-overview__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </section>

              <section className="lp-version">
                <div className="lp-version__grid">
                  <div className="lp-version__content content--dark">
                    <h2>Enterprise 🏦</h2>
                    <p className="lp-version__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                    <Button text={"check"} />
                  </div>
                  <div className="lp-version__content content--light">
                    <h2>Individual ☕️</h2>
                    <p className="lp-version__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                    <Button text={"check"} />
                  </div>
                </div>
              </section>

              <section className="lp-newsletter">
                <div className="lp-newsletter__grid">
                  <div className="lp-newsletter__content">
                    <h2 className="lp-newsletter__title">Newsletter</h2>

                    <form className="lp-newsletter__form" action="">
                      <input
                        className="lp-newsletter__input"
                        type="text"
                      />
                      <Button
                        classname={"btn lp-newsletter__form-btn"}
                        text={"send"}
                      />
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
    }
}

export default LandingPage;