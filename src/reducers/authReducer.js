import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from "../actions/types";

const initialState = {
  authError: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: false
      };
    case LOGIN_ERROR:
    console.log('Login failed')
      return {
        ...state,
        authError: true
      };
    case LOGOUT_SUCCESS:
      return state;
    default:
      return state;
  }
};
