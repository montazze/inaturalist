import { connect } from "react-redux";
import ObservationSearch from "../components/observation_search";
import { fetchObservations } from "../actions";

function mapDispatchToProps( dispatch ) {
  return {
    onSearch: ( params ) => {
      dispatch( fetchObservations( params ) );
    }
    // TODO map a click to dispatch a SHOW_OBSERVATION action, or something
  };
}

const ObservationModalContainer = connect(
  null,
  mapDispatchToProps
)( ObservationSearch );

export default ObservationModalContainer;
