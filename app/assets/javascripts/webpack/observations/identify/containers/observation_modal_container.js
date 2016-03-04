import { connect } from "react-redux";
import ObservationModal from "../components/observation_modal";
import { hideModalObservation } from "../actions";

function mapStateToProps( state ) {
  return {
    observation: state.modalObservation.observation,
    modalVisible: state.modalObservation.visible
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    onModalClose: ( ) => {
      dispatch( hideModalObservation( ) );
    }
    // TODO map a click to dispatch a SHOW_OBSERVATION action, or something
  };
}

const ObservationModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( ObservationModal );

export default ObservationModalContainer;
