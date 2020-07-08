import { GET_LIST } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_LIST:
            return actions.data;

        default:
            return state;
    }
};
