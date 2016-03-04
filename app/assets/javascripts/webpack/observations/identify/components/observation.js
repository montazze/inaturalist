import React, { PropTypes } from "react";
const Observation = ( { onClick, speciesGuess, photoUrl } ) =>
  <div className="col-xs-3" onClick={onClick}>
    <div className="thumbnail">
      <img src={photoUrl} />
      <div className="caption">
        {speciesGuess}
      </div>
    </div>
  </div>;

Observation.propTypes = {
  onClick: PropTypes.func,
  speciesGuess: PropTypes.string,
  photoUrl: PropTypes.string
};

export default Observation;
