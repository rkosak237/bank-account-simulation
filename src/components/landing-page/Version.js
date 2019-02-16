import * as React from 'react';
// import { Link } from "react-router-dom";
import Button from '../global/Button';

export default () => (
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
);