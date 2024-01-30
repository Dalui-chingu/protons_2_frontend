// UserReview.js

import React from 'react';
import './UserReview.css'; // Import your CSS file

const UserReview = ({ username, userImage, timePosted, review }) => {
  return (
    <div className="review-containerr">
      <div className="user-circle" style={{ backgroundImage: `url(${userImage})` }}>
        {/* Circle representing the user */}
      </div>
      <div className="review-content">
        <div className="user-info">
          {/* <img src={userImage} alt="User Avatar" /> */}
          <div>
            <p className="username">{username}</p>
            <p className="time-posted">Posted on {timePosted}</p>
          </div>
        </div>
        <p className="user-review">{review}</p>
      </div>
    </div>
  );
};

export default UserReview;