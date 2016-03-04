const SHOW_MODAL_OBSERVATION = "show_modal_observation";
const HIDE_MODAL_OBSERVATION = "hide_modal_observation";

function showModalObservation( observation ) {
  return {
    type: SHOW_MODAL_OBSERVATION,
    observation
  };
}

function hideModalObservation( ) {
  return {
    type: HIDE_MODAL_OBSERVATION
  };
}

export {
  SHOW_MODAL_OBSERVATION,
  HIDE_MODAL_OBSERVATION,
  showModalObservation,
  hideModalObservation
};
