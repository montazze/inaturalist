import { connect } from "react-redux";
import CommentForm from "../components/comment_form";
import { postComment, hideModalObservation } from "../actions";

// ownProps contains data passed in through the "tag", so in this case
// <CommentFormContainer observation={foo} />
function mapStateToProps( state, ownProps ) {
  return {
    observation: ownProps.observation
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    onSubmitComment: ( comment ) => {
      dispatch( hideModalObservation( ) );
      dispatch( postComment( comment ) );
    }
  };
}

const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( CommentForm );

export default CommentFormContainer;
