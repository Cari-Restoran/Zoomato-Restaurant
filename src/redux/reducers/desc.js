import { GET_MENU } from "../actions";

const initialState = [];
export default(state = initialState, actions) =>  {
    switch (actions.type) {
        case GET_MENU:
            return actions.datas;

        default:
            return state;
    }
};


