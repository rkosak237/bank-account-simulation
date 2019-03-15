import * as React from 'react';
import LogIn from '../components/login/LogIn';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { logIn } from '../actions/auth';
import Previous from '../components/global/Previous';

class LogInPage extends React.Component {
constructor(props) {
  super(props);

   this.state = {
     user: {
       email: '',
       password: ''
     },
     validationError: {
       invalidEmail: false,
       invalidPass: false
     },
   }
}

  handleSubmit = (e) => {
    const { authError } = this.props;
      e.preventDefault();

      const clearInvalidState = {
        email: '',
        password: ''
      }

      //This passes user state catched in handleChange to redux-thunk, and then to firebase

      this.props.logIn(this.state.user);


    if (!authError) {
      this.setState({
        userValidation: clearInvalidState
      });
    }

  }


//move validation to separate file
    validateInputs = (name) => {
        const {
            email,
            password,
        } = this.state.user;
        const { validationError } = this.state;


        //regexp
        const regexValidMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        // //email vaildation
        const emailIsValid = email.match(regexValidMail),
        emailIsntEmpty = email.length != 0,

        //password validation
        passwordLength = password.length >= 5,
        passwordIsntEmpty = password.length != 0;


        switch(name) {
          case 'email':
            validationError.invalidEmail = emailIsValid & emailIsntEmpty ? false : true;
              break;
            case 'password':
            validationError.invalidUser = passwordLength & passwordIsntEmpty? false : true;
                break;
            default:
                break;
        }

        return validationError.invalidUser & validationError.invalidEmail ? false : true;
    }

    handleChange = (e) => {
        const { user } = this.state;

        const target = e.target,
            value = target.value,
            name = target.name;

            this.setState({
            user: {
                ...user,
                [name]: value
            }
        })

      this.validateInputs(name);
    }

  render() {
    const {
      showErrors
    } = this.state;
    const { auth, authError } = this.props;
    const { mail, password } = this.state.user;


    if(auth.uid) return <Redirect to="/desktop" />
     return (
       <div className="main__container signUp">
        <section className="signUp__container fade-in">
          <LogIn
            email={mail}
            password={password}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            showErrors={authError}
            form={"signUp"}
          />
        </section>
         {this.props.authError ? 'trutrue' : 'false'}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  { logIn }
)(LogInPage);