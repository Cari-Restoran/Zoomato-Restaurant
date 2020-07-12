import { GET_USER_LOGIN } from "../actions";

// const initialState = [];

export default (state = [], actions) => {
  switch (actions.type) {
    case GET_USER_LOGIN:
      console.log(actions.data);
      return actions.data;

    default:
      return state;
  }
};
