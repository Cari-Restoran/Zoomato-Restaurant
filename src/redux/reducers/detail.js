import { GET_DETAIL } from "../actions";

const initialState = [];
export default(state = initialState, actions) =>  {
    switch (actions.type) {
        case GET_DETAIL:
            return actions.datas;

        default:
            return state;
    }
};