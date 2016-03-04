import { RECEIVE_OBSERVATIONS } from "../actions";

const observationsReducer = ( state = [], action ) => {
  switch ( action.type ) {
    case RECEIVE_OBSERVATIONS:
      return action.observations;
    default:
      return state;
  }
};

export default observationsReducer;
