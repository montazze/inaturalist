import { combineReducers } from "redux";
import todos from "./todos";
import observations from "./observations";
import modal from "./modal";
// import visibilityFilter from './visibilityFilter';

// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// })
const rootReducer = combineReducers( { todos, observations, modal } );

export default rootReducer;
