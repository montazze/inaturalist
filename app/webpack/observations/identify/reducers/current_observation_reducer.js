import _ from "lodash";
import {
  SHOW_CURRENT_OBSERVATION,
  HIDE_CURRENT_OBSERVATION,
  RECEIVE_CURRENT_OBSERVATION,
  ADD_COMMENT,
  ADD_IDENTIFICATION,
  LOADING_DISCUSSION_ITEM,
  STOP_LOADING_DISCUSSION_ITEM,
  RECEIVE_OBSERVATIONS,
  UPDATE_CURRENT_OBSERVATION
} from "../actions";

const currentObservationReducer = ( state = {}, action ) => {
  switch ( action.type ) {
    case SHOW_CURRENT_OBSERVATION:
      return Object.assign( {}, state, {
        visible: true,
        observation: action.observation,
        commentFormVisible: false,
        identificationFormVisible: false,
        captiveByCurrentUser: action.observation.captiveByCurrentUser,
        reviewedByCurrentUser: action.observation.reviewedByCurrentUser
      } );
    case HIDE_CURRENT_OBSERVATION:
      return Object.assign( {}, state, {
        visible: false
      } );
    case RECEIVE_CURRENT_OBSERVATION: {
      const obs = _.cloneDeep( action.observation );
      obs.captiveByCurrentUser = action.captiveByCurrentUser;
      obs.reviewedByCurrentUser = action.reviewedByCurrentUser;
      return Object.assign( {}, state, {
        observation: obs,
        captiveByCurrentUser: action.captiveByCurrentUser,
        reviewedByCurrentUser: action.reviewedByCurrentUser,
        loadingDiscussionItem: false,
        currentUserIdentification: action.currentUserIdentification
      } );
    }
    case UPDATE_CURRENT_OBSERVATION:
      return Object.assign( {}, state, {
        observation: Object.assign( {}, state.observation, action.updates )
      }, action.updates );
    case ADD_COMMENT:
      return Object.assign( {}, state, {
        commentFormVisible: true,
        identificationFormVisible: false
      } );
    case ADD_IDENTIFICATION:
      return Object.assign( {}, state, {
        identificationFormVisible: true,
        commentFormVisible: false
      } );
    case LOADING_DISCUSSION_ITEM:
      return Object.assign( {}, state, {
        identificationFormVisible: false,
        commentFormVisible: false,
        loadingDiscussionItem: true
      } );
    case STOP_LOADING_DISCUSSION_ITEM:
      return Object.assign( {}, state, {
        identificationFormVisible: false,
        commentFormVisible: false,
        loadingDiscussionItem: false
      } );
    case RECEIVE_OBSERVATIONS:
      return Object.assign( { }, state, { observation: null } );
    default:
      return state;
  }
};

export default currentObservationReducer;
