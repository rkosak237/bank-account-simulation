import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '../global/Button';

export default () => (
    <section className="lp-product lp-product--gradient-bg grid-centered">
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
);