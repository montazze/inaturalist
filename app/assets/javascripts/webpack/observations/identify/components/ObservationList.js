import React, { PropTypes } from "react";
import Observation from "./Observation";

const ObservationList = ( { observations, onObservationClick } ) => (
  <div className="container">
    <div className="row">
      {observations.map( ( observation ) =>
        <Observation
          key={observation.id}
          {...observation}
          onClick={function onObsClick() { onObservationClick( observation.id ); }}
        />
      ) }
    </div>
  </div>
);

ObservationList.propTypes = {
  observations: PropTypes.arrayOf( PropTypes.shape( {
    id: PropTypes.number.isRequired,
    speciesGuess: PropTypes.string,
    photoUrl: PropTypes.string
  } ).isRequired ).isRequired,
  onObservationClick: PropTypes.func
};

export default ObservationList;
