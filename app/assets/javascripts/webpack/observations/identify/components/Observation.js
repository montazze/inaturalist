import React, { PropTypes } from "react";
const Observation = ( { onObservationClick, speciesGuess, photoUrl } ) =>
  <div className="thumbnail col-xs-2" onClick={onObservationClick}>
    <img src={photoUrl} />
    <div className="caption">
      {speciesGuess}
    </div>
  </div>;

Observation.propTypes = {
  onObservationClick: PropTypes.func,
  speciesGuess: PropTypes.string,
  photoUrl: PropTypes.string
};

export default Observation;
