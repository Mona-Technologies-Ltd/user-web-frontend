import React from 'react';
import './NotificationsPanel.css';

const notifications = [
  {
    id: 1,
    title: 'New Claim Submitted',
    message: 'Claim ID #12345 requires your review.',
    time: '2 mins ago'
  },
  {
    id: 2,
    title: 'Reminder',
    message: 'Payment for Claim ID #67890 is due tomorrow.',
    time: '2 mins ago'
  },
  {
    id: 3,
    title: 'Status Update',
    message: 'Claim ID #11223 has been approved.',
    time: '2 mins ago'
  }
];

export default function NotificationsPanel() {
  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h6>Notifications</h6>
        <div className="tabs">
          <div className="tab active">New (4)</div>
          <div className="tab">All</div>
        </div>
      </div>

      <div className="notifications-body">
        {notifications.map((note) => (
          <div key={note.id} className="notification-item">
            <div className="icon-wrapper">
              <div className="icon-circle">
                <span role="img" aria-label="bell">🔔</span>
              </div>
            </div>
            <div className="notification-content">
              <p className="title">{note.title}</p>
              <p className="message">{note.message}</p>
              <p className="time">{note.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
