import React from 'react';

// style
import './Posts.scss';

const PostsLoader = () => {
  return (
    <>
      <div className="skeleton">
        <div className="skeleton-title loading"></div>
        <div className="flex-start">
          <div className="skeleton-user loading"></div>
          <div className="skeleton-details">
            <div className="skeleton-name loading"></div>
            <div className="skeleton-date loading"></div>
          </div>
        </div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="space-between">
          <div className="flex-start">
            <div className="skeleton-reaction">
              <div className="skeleton-love loading"></div>
              <div className="skeleton-like loading"></div>
              <div className="skeleton-count loading"></div>
            </div>
            <div className="skeleton-reaction">
              <div className="skeleton-love loading"></div>
              <div className="skeleton-like loading"></div>
              <div className="skeleton-count loading"></div>
            </div>
          </div>
          <div className="flex-start">
            <div className="dot loading"></div>
            <div className="dot loading"></div>
            <div className="dot loading"></div>
          </div>
        </div>
      </div>
      <div className="skeleton">
        <div className="skeleton-title loading"></div>
        <div className="flex-start">
          <div className="skeleton-user loading"></div>
          <div className="skeleton-details">
            <div className="skeleton-name loading"></div>
            <div className="skeleton-date loading"></div>
          </div>
        </div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="skeleton-desc loading"></div>
        <div className="space-between">
          <div className="flex-start">
            <div className="skeleton-reaction">
              <div className="skeleton-love loading"></div>
              <div className="skeleton-like loading"></div>
              <div className="skeleton-count loading"></div>
            </div>
            <div className="skeleton-reaction">
              <div className="skeleton-love loading"></div>
              <div className="skeleton-like loading"></div>
              <div className="skeleton-count loading"></div>
            </div>
          </div>
          <div className="flex-start">
            <div className="dot loading"></div>
            <div className="dot loading"></div>
            <div className="dot loading"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostsLoader;
