import React from 'react';

// style
import './Dropdown.scss';

const Dropdown = () => {
  return (
    <div className="dropdown-content">
      <a className="#"> Edit &#128221;</a>
      <a className=""> Delete &#128221;</a>
      <a className="align-center">
        Bookmark
        <div className="mt-5">
          <svg className="bookmark-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>
    </div>
  )
}

export default Dropdown;
