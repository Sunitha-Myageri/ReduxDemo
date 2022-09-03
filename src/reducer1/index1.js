import {combineReducers} from "redux";
import CounterReducer1 from "./CounterReducer1";
import ListReducer from "./ListReducer";



    const allReducers1=combineReducers({counter:CounterReducer1,List:ListReducer});

    export default allReducers1;
