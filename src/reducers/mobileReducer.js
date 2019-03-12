import { TOGGLE_NAV } from "../actions/types";


const initialState = {
    navIsOpen: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_NAV:
            return {
                ...state,
                navIsOpen: !state.navIsOpen
            };
        default:
            return state;
    }
};
