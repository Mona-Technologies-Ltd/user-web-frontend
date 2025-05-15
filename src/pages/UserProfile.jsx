import React from 'react';
import './UserProfile.css';
import { FiPhone, FiMail } from 'react-icons/fi';

export default function UserProfile() {
  return (
    <div className="user-profile-container">
      <div className="user-header">
        <div className="avatar-circle">J</div>
        <div>
          <h2 className="username">John Doe</h2>
          <span className="badgeCus">Customer</span>
        </div>
      </div>

      <div className="contact-box">
        <FiPhone className="icon" />
        <span>081 4939 4586</span>
      </div>

      <div className="contact-box">
        <FiMail className="icon" />
        <span>Johndoe23@gmail.com</span>
      </div>
    </div>
  );
}
