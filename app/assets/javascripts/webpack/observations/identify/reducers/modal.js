const modalReducer = ( state = false, action ) => {
  console.log( "[DEBUG] modalReducer, action.type: ", action.type );
  switch ( action.type ) {
    case "SHOW_MODAL":
      return true;
    case "HIDE_MODAL":
      return false;
    default:
      return state;
  }
};

export default modalReducer;
