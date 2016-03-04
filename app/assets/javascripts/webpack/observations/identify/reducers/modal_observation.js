import { SHOW_MODAL_OBSERVATION, HIDE_MODAL_OBSERVATION } from "../actions";

const modalObservationReducer = ( state = { visible: false }, action ) => {
  switch ( action.type ) {
    case SHOW_MODAL_OBSERVATION:
      return {
        visible: true,
        observation: action.observation
      };
    case HIDE_MODAL_OBSERVATION:
      return {
        visible: false,
        observation: state.observation
      };
    default:
      return state;
  }
};

export default modalObservationReducer;
