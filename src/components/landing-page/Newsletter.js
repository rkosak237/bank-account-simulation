import * as React from 'react';
// import { Link } from "react-router-dom";
import Button from '../global/Button';

export default () => (
    <section className="lp-newsletter">
        <div className="lp-newsletter__grid">
            <div className="lp-newsletter__content">
                <h2 className="lp-newsletter__title">Newsletter</h2>
                <p className="lp-newsletter__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                </p>

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
);