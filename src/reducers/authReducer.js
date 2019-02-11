import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from "../actions/types";

const initialState = {
  authError: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("logged");
      return {
        ...state,
        authError: null
      };
    case LOGIN_ERROR:
      console.log("login failed");
      return {
        ...state,
        authError: "Login failed"
      };
    case LOGOUT_SUCCESS:
      console.log("SignOut success");
      return state;
    default:
      return state;
  }
};
