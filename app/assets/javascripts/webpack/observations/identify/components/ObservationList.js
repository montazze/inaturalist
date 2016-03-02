import React, { PropTypes } from "react";
import { Button, Modal } from "react-bootstrap";
import Observation from "./Observation";

const ObservationList = ( {
    observations,
    onObservationClick,
    onModalClose,
    modalShown,
    onButtonClick
  } ) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Button onClick={ function () { onButtonClick(); } }>
          This is a react bootstrap button.
        </Button>
        <Modal show={modalShown} onHide={onModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>This is the title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Modal.Body>
        </Modal>
      </div>
      <div className="col-xs-12">
        {observations.map( ( observation ) =>
          <Observation
            key={observation.id}
            {...observation}
            onClick={function () { onObservationClick( observation.id ); } }
          />
        ) }
      </div>
    </div>
  </div>
);

ObservationList.propTypes = {
  observations: PropTypes.arrayOf( PropTypes.shape( {
    id: PropTypes.number.isRequired,
    speciesGuess: PropTypes.string,
    photoUrl: PropTypes.string
  } ).isRequired ).isRequired,
  onObservationClick: PropTypes.func,
  onModalClose: PropTypes.func,
  onButtonClick: PropTypes.func,
  modalShown: PropTypes.bool
};

export default ObservationList;
