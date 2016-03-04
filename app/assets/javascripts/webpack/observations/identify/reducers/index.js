import { combineReducers } from "redux";
import observations from "./observations";
import modalObservation from "./modal_observation";
import config from "./config_reducer.js";

const rootReducer = combineReducers( { observations, modalObservation, config } );

export default rootReducer;
