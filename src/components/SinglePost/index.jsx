import React, { useState } from 'react';

import { truncatePost, formatLongNumber } from '../../utils/utilities';

// action creators
// import { getComments } from "../../store/actions/comments";

// components
import SingleComment from '../SingleComment';
import Comments from '../Comments';
import Dropdown from '../Dropdown';
import Like from '../Like';

// style
import './SinglePost.scss';

const SinglePost = ({ post, getComments }) => {
  const postLength = post.body.length;

  const [isTruncated, setTextTruncation] = useState(postLength > 300);

  const setTruncation = (e) => {
    e.preventDefault();
    setTextTruncation(!isTruncated);
  }

  const fetchComments = () => {
    const { id } = post;
    localStorage.setItem('postId', id);
    getComments();
  }

  return (
    <div className="card">
      <div className="p-20">
        <h4 className="card-title">{post.title}</h4>
        <div className="flex-start">
          <div>
            <img src={post.avatar} className="card-image" alt="" />
          </div>
          <div className="ml-10">
            <div className="card-username"><a href="profile.html">{post.creator}</a></div>
            <div className="date-span mt--5">11 May</div>
          </div>
        </div>
        <div className="card-body">
          <p>
            {
              isTruncated ?
                (<>
                  {truncatePost(post.body)}....
                  <a href="#" onClick={setTruncation}>
                    More
                  </a>
                </>
                ) : (
                  <>
                    {post.body}
                    {
                      (postLength > 300 && !isTruncated) &&
                      <a onClick={setTruncation}>
                        Show less
                      </a>
                    }
                  </>
              )
            }
          </p>
        </div>
        <div className="space-between">
          <div className="reactions flex-start">
            <div className="flex-start">
              <div className="like">
                  <Like/>
                <span className="reaction-count">{formatLongNumber(post.like)}</span>
              </div>
            </div>
            <div className="flex-start ml-40">
              <div className="like">
                <button class="icon-btn" onClick={fetchComments}>
                  <svg className="commentSvg" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#444" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <span className="reaction-count">56</span>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropdown-ellipsis">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
            <Dropdown />
          </div>
        </div>
      </div>
      {
        post.comments &&
        <Comments comments={post.comments}/>
      }
    </div>
  )
}

export default SinglePost;
