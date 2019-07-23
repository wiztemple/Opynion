import React from 'react';

// css
import './Loader.scss';

const Loader = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader;

