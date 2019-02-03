import * as React from 'react';
import Header from '../components/global/Header';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return <div>
            {/* <Header /> */}
            <div className="main__container">
                <section className="lp-product lp-product--gradient-bg section-centered">
                <div className="main__grid lp-product__grid">
                  <div className="lp-product__content">
                    <h1 className="lp-product__title
                            lp-product__title--light">
                      As right as rain
                    </h1>
                    <p className="lp-product__text">
                                New banking experience in your smartphone. Track your costs on charts, check your current balance, send transfer by 4 clicks. <br /> Simple - thats how it should be. 👍
                    </p>

                    <div className="lp-product__buttons-container">
                      <button className="btn">Login</button>
                      <button className="btn">Regiester</button>
                    </div>
                  </div>
                </div>

              </section>

              <section className="lp-overview section-centered">
                <div className="main__grid lp-overview__grid">
                  <div className="lp-overview__content">
                    <h2>Value #1 🚀 </h2>
                    <p class="lp-overview__text">
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

              <section className="lp-sample">
                <div className="lp-sample__grid">
                    <div className="lp-sample__content">
                        <h2>Lore ipsum</h2>
                        <p className="lp-sample__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <button className="btn">check</button>
                    </div>
                    <div className="lp-sample__content">
                        <h2>Lore ipsum</h2>
                        <p className="lp-sample__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <button className="btn">check</button>
                    </div>

                </div>
              </section>
            </div>
          </div>;
    }
}

export default LandingPage;