import React from 'react';

// styles
import './SingleComment.scss';

// components
import SingleReply from '../SingleReply';
// assets
import user from '../../assets/images/user.png';

const SingleComment = ({comment}) => {
    return (
      <div className="threads bt-1">
        <div className="p-20">
          <div className="inputField">
            <div className="flex-start mt-10">
              <div className="align-center">
                <img className="avatar-sm" src={comment.avatar} alt="user" />
              </div>
              <div className="ml-10 mt-3 w-100">
                <form>
                  <input type="text" className="form-control" placeholder="Add comment here" />
                </form>
              </div>
              <div className="ml-10">
                <button className="button button-sm button-dark button-rounded ripple">Comment</button>
              </div>
            </div>
          </div>
          <div className="flex-start pt-20">
            <div className="">
              <img className="avatar-sm" src={comment.avatar} alt="user" />
            </div>
            <div className="ml-10">
              <div className="card-username">{comment.commenter}</div>
              <div className="date-span mt--5">11 May</div>
            </div>
          </div>
          <div className="card-body">
            <p className="font-14">
             {comment.commentBody} 
            </p>
          </div>
          <div className="space-between pb-10">
            <div className="reactions flex-start">
              <div className="reaction font-14">
                <span className="reaction-icon">
                  &#128077;
                </span>
                <span className="reaction-type">Like</span>
                <span className="reaction-count">67</span>
              </div>
              <div className="reaction reactionJs font-14 ml-20">
                <span className="reaction-icon">&#8624;</span>
                <span className="reaction-type">Reply</span>
                <span className="reaction-count">67</span>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown-ellipsis">&#8943;</div>
              <div className="dropdown-content">
                <a className="#"> Edit &#128221;</a>
                <a className="#">Delete &#128221;</a>
                <a className="#">Bookmark &#128221;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SingleComment;

