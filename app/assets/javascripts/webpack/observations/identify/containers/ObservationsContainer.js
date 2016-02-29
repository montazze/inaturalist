import { connect } from "react-redux";
import ObservationList from "../components/ObservationList";

function mapStateToProps( state ) {
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
    } )
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    // onObservationClick: ( id ) => {
    //   dispatch( toggleTodo( id ) );
    // }
    // TODO map a click to dispatch a SHOW_OBSERVATION action, or something
  };
}

const ObservationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( ObservationList );

export default ObservationsContainer;
