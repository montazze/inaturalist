const todoReducer = ( state, action ) => {
  console.log( "[DEBUG] todoReducer, action.type: ", action.type );
  switch ( action.type ) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if ( state.id !== action.id ) {
        return state;
      }
      return Object.assign( {}, state, {
        completed: !state.completed
      } );
    default:
      return state;
  }
};

const todosReducer = ( state = [], action ) => {
  console.log( "[DEBUG] todosReducer, action.type: ", action.type );
  switch ( action.type ) {
    case "ADD_TODO":
      return [
        ...state,
        todoReducer( undefined, action )
      ];
    case "TOGGLE_TODO":
      return state.map( t => todoReducer( t, action ) );
    default:
      return state;
  }
};

export default todosReducer;
