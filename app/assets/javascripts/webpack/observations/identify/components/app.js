import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import ObservationListContainer from "../containers/observation_list_container";
import ObservationModalContainer from "../containers/observation_modal_container";
import ObservationSearchContainer from "../containers/observation_search_container";

const App = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <h2>Identify</h2>
      </Col>
    </Row>
    <ObservationSearchContainer />
    <ObservationListContainer />
    <ObservationModalContainer />
  </Grid>
);
export default App;
