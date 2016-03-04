import React, { PropTypes } from "react";
import { Row, Col, Button, Input } from "react-bootstrap";

const ObservationSearch = ( { onSearch } ) => (
  <Row>
    <Col xs={12}>
      <form
        className="form-inline stacked"
        onSubmit={function ( e ) {
          e.preventDefault();
          onSearch( { q: e.target.elements.q.value } );
        } }
      >
        <Input type="text" name="q" />
        <Button>
          Search
        </Button>
      </form>
    </Col>
  </Row>
);

ObservationSearch.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default ObservationSearch;
