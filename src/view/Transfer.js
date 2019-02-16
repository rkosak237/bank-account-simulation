import * as React from 'react';
import Header from "../components/header/Header";
//redux
import { connect } from "react-redux";
//router
import { Redirect } from "react-router-dom";

class Transfer extends React.Component {

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />

  return (
  <div>
    <div className="main__container fade-in">
      <section className="transfer-card">
        <div className="transfer-card__grid">
          <span className="previous-page">Arrow</span>
          <div className="transfer__select-container" />
          <div className="transfer-card__content-grid">
            <div className="transfer__add-account">
              <span className="add-account__icon" />
              <p>Add the account from which you draw funds</p>
            </div>

            <div className="transfer__content">
              <p className="aside__text">Type</p>
              <ul className="aside__container type__list">
                <li className="type__list-item">Country</li>
                <li className="type__list-item">Own</li>
                <li className="type__list-item">Currency</li>
                <li className="type__list-item">ZUS</li>
                <li className="type__list-item">TAX</li>
                <li className="type__list-item">GSM</li>
              </ul>
            </div>

            <div className="transfer__content">
              <p className="aside__text">Recipent</p>
              <div className="aside__container">
                <input type="text" className="recipent__input" />
              </div>
            </div>

            <div className="transfer__content">
              <p className="aside__text">Where</p>
              <div className="aside__container">
                <div className="transfer__content">
                  <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer__destination"
                  />
                  <label className="radio__label">Account</label>
                </div>
                <div className="transfer__content">
                  <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer__destination"
                  />
                  <label className="radio__label">Facebook</label>
                </div>
                <div className="transfer__content">
                  <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer__destination"
                  />
                  <label className="radio__label">Phone</label>
                </div>
                <div className="transfer__content">
                  <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer__destination"
                  />
                  <label className="radio__label"> Email</label>
                </div>
              </div>
            </div>

            <div className="transfer__content">
              <p className="aside__text">Number</p>
              <div className="aside__container">
                <input type="text" className="recipent__input" />
              </div>
            </div>

            <div className="transfer__content">
              <p className="aside__text">Sum</p>
              <div className="aside__container">
                <input type="text" className="recipent__input" />
              </div>
            </div>

            <div className="transfer__content">
              <p className="aside__text">When</p>
              <div className="aside__container">
                <input type="text" className="recipent__input" />
              </div>
            </div>

            <div className="transfer__content">
              <p className="aside__text">Title</p>
              <div className="aside__container">
                <input type="text" className="recipent__input" />
              </div>
            </div>

            <div className="transfer__content">
              <p className="aside__text">Type of transfer</p>
              <div className="aside__container">
                <div className="transfer__content">
                  <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer"
                  />
                  <label className="radio__label">
                    <b>Normaly</b>
                    <br />
                    About 7 days
                  </label>
                </div>
                <div className="transfer__content">
                  <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer"
                  />
                  <label className="radio__label">
                    <b>Express Eliksir</b>
                    <br />
                    15 min
                  </label>
                </div>
                <div className="transfer__content">
                  <input
                    type="radio"
                    className="recipent__input input--radio"
                    name="transfer"
                  />
                  <label className="radio__label">
                    <b>Sorbnet</b>
                    <br />2 hours
                  </label>
                </div>
              </div>
            </div>

            <div className="transfer__add-account">
              <button className="btn">Continue</button>
            </div>
          </div>
        </div>
      </section>
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