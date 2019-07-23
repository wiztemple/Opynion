import React from 'react';

import user from '../../assets/images/user.png';


const SingleReply = () => {
  return (
    <div className="reply ml-40">
        <div className="flex-start inputField mt-10">
          <div className="">
            <img src={user} className="card-image" alt="" />
          </div>
          <div className="ml-10 mt-3 w-100">
            <form>
              <input type="text" className="form-control" placeholder="Reply" />
            </form>
        </div>
        <div className="ml-10">
          <button className="button button-sm button-dark button-rounded">&#8618; Reply</button>
        </div>
        </div>
        <div className="flex-start mt-20">
          <div className="">
            <img src={user} className="card-image" alt="" />
          </div>
          <div className="ml-10">
            <div className="card-username">Wiz Sullivan</div>
            <div className="date-span mt--5">11 May</div>
          </div>
        </div>
        <div className="card-body">
          <p className="font-14">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, sit dolor, sunt dolore ipsam
            reiciendis, ullam error maiores architecto esse facere aliquam perspiciatis culpa accusamus a alias! Veritatis
            architecto obcaecati provident minima animi natus consectetur minus facere quibusdam modi, quos exercitationem
            possimus voluptatum soluta quo maxime est ratione sequi deserunt accusantium necessitatibus incidunt qui tempore.
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
            <div className="reaction font-14 ml-20">
              <span className="reaction-icon">&#8624;</span>
              <span className="reaction-type">Reply</span>
              <span className="reaction-count">67</span>
            </div>
          </div>
          <div className="dropdown">
            <div className="dropdown-ellipsis">&#8943;</div>
            <div className="dropdown-content">
              <a className="#">Edit &#128221;</a>
              <a className="#">Delete &#128221;</a>
              <a className="#">Bookmark &#128221;</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SingleReply;
