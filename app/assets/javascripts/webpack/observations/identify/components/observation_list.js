import React, { PropTypes } from "react";
import { Row } from "react-bootstrap";
import Observation from "./observation";

const ObservationList = ( {
    observations,
    onObservationClick
  } ) => (
  <Row>
    {observations.map( ( observation ) =>
      <Observation
        key={observation.id}
        {...observation}
        onClick={function () { onObservationClick( observation ); } }
      />
    ) }
  </Row>
);

ObservationList.propTypes = {
  observations: PropTypes.arrayOf( PropTypes.shape( {
    id: PropTypes.number.isRequired,
    speciesGuess: PropTypes.string,
    photoUrl: PropTypes.string
  } ).isRequired ).isRequired,
  onObservationClick: PropTypes.func,
  onModalClose: PropTypes.func
};

export default ObservationList;
