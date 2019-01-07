import * as React from 'react';
import { withRouter } from "react-router-dom";
import LogIn from '../components/login/LogIn';

class SignUp extends React.Component {
constructor(props) {
  super(props);

   this.state = {
     userNameInBase: false,
     showErrors: false,
     user: {
       email: '',
       password: ''
     },
     validationError: {
       invalidUser: false,
       invalidEmail: false
     },
   }
}

 handleSubmit = (e) => {

        e.preventDefault();
        const clearInvalidState = {
            email: '',
            password: ''
        }

        if(this.validateInputs()) {
            this.props.history.push("/desktop");

        } else {
            this.setState({
                showErrors: true,
                userValidation: clearInvalidState
            })
        }

    }

    validateInputs = (name) => {
        const {
            email,
            password,
        } = this.state.user;
        const { validationError } = this.state;


        //regexp
        const regexValidMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        // //email vaildation
        const emailIsValid = email.match(regexValidMail);

        //password validation
        const passwordLength = password.length >= 5;



        switch(name) {
          case 'email':
              validationError.invalidEmail = emailIsValid  ? false : true;
              break;
            case 'password':
                validationError.invalidUser = passwordLength ? false : true;
                break;
            default:
                break;
        }

        return validationError.invalidUser & validationError.invalidEmail ? false : true;
    }

    handleChange = (e) => {
        const { user } = this.state;
        const target = e.target,
            value = target.type === 'checkbox' ? target.checked : target.value,
            name = target.name;

            this.setState({
            user: {
                ...user,
                [name]: value
            }
        })

      // this.validateInputs(name);
    }

  render() {
    const {
      userNameInBase,
      showErrors
    } = this.state;

    const {
      validationError
    } = this.state;

     return (
      <div className="main__container signUp">
        <section className="signUp__container">
          <LogIn
            email={this.state.user.mail}
            password={this.state.user.password}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            userNameInBase={userNameInBase}
            validationError={validationError}
            showErrors={showErrors}
            form={"signUp"}
          />
        </section>
      </div>
    )
  }
}
export default withRouter(SignUp);