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
        const {
            userNameInBase,
        } = this.state;

        e.preventDefault();
        const clearInvalidState = {
            email: '',
            password: ''
        }

        if(this.validateInputs()) {
            if(this.checkDataWithState()) {
                this.setState({
                    showErrors: false,
                    userNameInBase: !userNameInBase,
                    userValidation: clearInvalidState
                })
            } else {
                this.props.history.push("/desktop");
            }
        } else {
            this.setState({
                showErrors: true,
                userValidation: clearInvalidState
            })
        }

    }

    validateInputs = (name) => {
        // const {
        //     fullNameReceived,
        //     emailReceived,
        // } = this.state.userValidation;
        // const { validationError } = this.state;


        // //regexp
        // const regexValidMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        //     regexFullName = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/gi;

        // //fullname validation
        // const fullNameLength = fullNameReceived.length >= 5,
        //     itHasNameAndSurname = fullNameReceived.match(regexFullName),

        // //email vaildation
        //     emailIsValid = emailReceived.match(regexValidMail);

        // switch(name) {
        //     case 'fullNameReceived':
        //         validationError.invalidUser = fullNameLength || itHasNameAndSurname ? false : true;
        //         break;
        //     case 'emailReceived':
        //         validationError.invalidEmail = emailIsValid  ? false : true;
        //         break;
        //     default:
        //         break;
        // }

        // return validationError.invalidUser & validationError.invalidEmail ? false : true;
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