import * as React from 'react';
import Header from "../components/header/Header";

//redux
import { connect } from "react-redux";
//router
import { Redirect } from "react-router-dom";

class Calendar extends React.Component {

    render() {
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to="/" />
        return (
          <div>
            <div className="main__container fade-in">
              <div className="main__grid">
                <h1>Calendar</h1>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Calendar);