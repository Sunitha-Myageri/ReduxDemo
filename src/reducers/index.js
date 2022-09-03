import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";

const allReducers = combineReducers({counter:CounterReducer});
export default allReducers;