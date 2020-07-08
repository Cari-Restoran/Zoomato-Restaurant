import { combineReducers } from "redux";
import list from "./list";
import login from "./login";
import desc from "./desc";

export default combineReducers({ list, login, desc });
