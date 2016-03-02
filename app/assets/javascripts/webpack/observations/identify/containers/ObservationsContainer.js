// TODO rename to ObservationListContainer so the container name matches the component
import { connect } from "react-redux";
import ObservationList from "../components/ObservationList";
import { showModal, hideModal } from "../actions";

function mapStateToProps( state ) {
  console.log( "[DEBUG] state.modal: ", state.modal );
  return {
    observations: state.observations.map( o => {
      let photoUrl = "";
      if ( o.photos.length && o.photos[0].url ) {
        photoUrl = o.photos[0].url.replace( /square/, "medium" );
      }
      const no = Object.assign( {}, o, {
        photoUrl,
        speciesGuess: o.taxon.name
      } );
      return no;
    } ),
    modalShown: state.modal
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    onObservationClick: ( ) => {
      // dispatch( toggleTodo( id ) );
      console.log( "[DEBUG] onObservationClick" );
    },
    onButtonClick: ( ) => {
      // dispatch( showModal() )
      console.log( "[DEBUG] onButtonClick" );
      dispatch( showModal( ) );
    },
    onModalClose: ( ) => {
      console.log( "[DEBUG] onModalClose" );
      dispatch( hideModal( ) );
    }
    // TODO map a click to dispatch a SHOW_OBSERVATION action, or something
  };
}

const ObservationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( ObservationList );

export default ObservationsContainer;
