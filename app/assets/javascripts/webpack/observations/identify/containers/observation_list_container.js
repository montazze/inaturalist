import { connect } from "react-redux";
import ObservationList from "../components/observation_list";
import { showModalObservation } from "../actions";

function mapStateToProps( state ) {
  return {
    observations: state.observations.map( o => {
      // In theory we'd want to use Patrick's models here
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
    onObservationClick: ( observation ) => {
      dispatch( showModalObservation( observation ) );
    }
  };
}

const ObservationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( ObservationList );

export default ObservationListContainer;
