import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";

// action creators
import { getComments } from "../../store/actions/comments";

// component
import SingleComment from '../SingleComment';
import Loader from '../skeletons/Loader'

class Comments extends React.Component {
  render() {
    const { comments, loading } = this.props;
    
    if (loading) {
      return <Loader />
    }

    return (
      <div>
        {comments.length > 0 && comments.map((comment, index) => {
          return (
            <SingleComment key={index} comment={comment} />
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => {
  return {
    loading: comments.loading
  };

};

export default connect(mapStateToProps)(Comments);
