import { combineReducers } from "redux";
import list from "./list";
import login from "./login";
import desc from "./desc";
import detail from "./detail";

export default combineReducers({ list, login, desc, detail });
