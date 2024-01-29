import React from 'react';
import './StationBooking.css'; 
import {Link} from 'react-router-dom'
import DirectionsIcon from '@mui/icons-material/Directions';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import UserReview from '../../Elements/UserReview';
import SendIcon from '@mui/icons-material/Send';
import Timeslot from '../../Elements/Timeslot';
const StationBooking = () => {
  return (
    <div className="right-section">
      <img
        src="https://www.manufacturingtodayindia.com/cloud/2023/01/31/Lty7weRU-Hyderabad-Vijayawada-1-1200x900.jpg"
        alt="logo"
        className="station-image-img" 
      />
      <div className="content-section">
        <h2 className="station-heading">EV Charging Station</h2>
        <div className="user-ratings">
          <p className='user-ratings-heading'>User Ratings</p>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="star">&#9733;</span>
          <span className="grey-star">&#9734;</span>
        </div>
        <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <div className="icons-section">
          <div className="icon-container">
            <DirectionsIcon/>
            <p>Direction</p>
          </div>
          <div className="icon-container">
            <BookmarkBorderIcon/>
            <p>Save</p>
          </div>
          <div className="icon-container">
            <ShareIcon />
            <p>Share</p>
          </div>
        </div>
      </div>
      <div className="timeslot_container">
        <h2>Choose your preffered Timeslot</h2>
        <Timeslot className='timeslot_dropdown' />
    <Link to="/payment"><button className="custom-button">Proceed to Pay</button></Link> 
      </div>
      
      <div className='review-section'>
        <p className='review-heading'>User Reviews</p>
        <div className='review-users'>
          <UserReview
            username="John Doe"
            userImage="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            timePosted="January 27, 2024"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula vitae mauris rutrum mattis. Nullam euismod, velit vel consectetur viverra, mi ex volutpat justo, at fermentum metus dolor id enim."
          />
          <UserReview
            username="John Doe"
            userImage="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg"
            timePosted="January 27, 2024"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula vitae mauris rutrum mattis. Nullam euismod, velit vel consectetur viverra, mi ex volutpat justo, at fermentum metus dolor id enim."
          />
          <UserReview
            username="John Doe"
            userImage="https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_1280.jpg"
            timePosted="January 27, 2024"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ligula vitae mauris rutrum mattis. Nullam euismod, velit vel consectetur viverra, mi ex volutpat justo, at fermentum metus dolor id enim."
          />
        </div>
        {/* Text box for user to write a review */}
        <div className="comment-section">
          <img src="https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg" alt="User Avatar" className="comment-user-avatar" />
          <textarea className="comment-box" placeholder="Write your review..."></textarea>
          <SendIcon className="send-icon-button" /> 
        </div>
      </div>
    </div>
  );
};

export default StationBooking;