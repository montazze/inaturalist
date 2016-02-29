import fetch from "isomorphic-fetch";

let nextTodoId = 0;
function addTodo( text ) {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
}

function setVisibilityFilter( filter ) {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
}

function toggleTodo( id ) {
  return {
    type: "TOGGLE_TODO",
    id
  };
}

function addObservation( observation ) {
  return {
    type: "ADD_OBSERVATION",
    id: observation.id,
    speciesGuess: observation.species_guess
  };
}

function getObservations( params ) {
  return {
    type: "GET_OBSERVATIONS",
    params
  };
}

function receiveObservations( observations ) {
  return {
    type: "RECEIVE_OBSERVATIONS",
    observations
  };
}

function fetchObservations( params ) {
  return function ( dispatch ) {
    console.log( "[DEBUG] dispatching getObservations" );
    dispatch( getObservations( params ) );
    return fetch( "http://api.inaturalist.org/v1/observations?verifiable=true" )
      .then( response => {
        console.log( "[DEBUG] fetched response: ", response );
        // console.log( "[DEBUG] response.json(): ", response.json() );
        return response.json();
      } )
      .then( json => {
        console.log( "[DEBUG] dispatching receiveObservations" );
        return dispatch( receiveObservations( json.results ) );
      } );
  };
}

export {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
  addObservation,
  getObservations,
  receiveObservations,
  fetchObservations
};

