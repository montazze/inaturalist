const observationReducer = ( state, action ) => {
  console.log( "[DEBUG] observationReducer, action.type: ", action.type );
  switch ( action.type ) {
    case "ADD_OBSERVATION":
      return {
        id: action.id,
        speciesGuess: action.speciesGuessq
      };
    default:
      return state;
  }
};

const observationsReducer = ( state = [], action ) => {
  console.log( "[DEBUG] observationsReducer, action.type: ", action.type );
  switch ( action.type ) {
    case "ADD_OBSERVATION":
      return [
        ...state,
        observationReducer( undefined, action )
      ];
    case "RECEIVE_OBSERVATIONS":
      console.log(
        "[DEBUG] reducing RECEIVE_OBSERVATIONS, action.observations: ", action.observations );
      return Object.assign( [], state, action.observations );
    default:
      return state;
  }
};

export default observationsReducer;
