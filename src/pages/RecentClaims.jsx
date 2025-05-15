import React from 'react';
import './RecentClaims.css';
import { FaShieldAlt } from 'react-icons/fa';

const claims = [
  {
    id: 'CL–134763',
    model: 'iPhone 13 Pro MAX',
    deviceId: 'IP12567',
    issue: 'Damaged screen',
    date: 'Dec 6, 2024',
    status: 'Pending',
  },
  {
    id: 'CL–134763',
    model: 'iPhone 13 Pro MAX',
    deviceId: 'IP12567',
    issue: 'Damaged screen',
    date: 'Dec 6, 2024',
    status: 'Approved',
  },
  {
    id: 'CL–134763',
    model: 'iPhone 13 Pro MAX',
    deviceId: 'IP12567',
    issue: 'Damaged screen',
    date: 'Dec 6, 2024',
    status: 'Completed',
  },
];

const getStatusStyles = (status) => {
  switch (status) {
    case 'Pending':
      return { color: '#EEA10D', bg: '#FFB82E40', box: '#FFB82E40' };
    case 'Approved':
      return { color: '#004AAD', bg: '#004AAD40', box: '#dbeafe' };
    case 'Completed':
      return { color: '#00752F', bg: '#00752F40', box: '#d1fae5' };
    default:
      return {};
  }
};

export default function RecentClaims() {
  return (
    <div className="claims-wrapper">
      <div className="claims-header">
        <h2>Recent Claims</h2>
        <button className="view-all">View All</button>
      </div>

      <div className="claims-grid">
        {claims.map((claim, idx) => {
          const styles = getStatusStyles(claim.status);
          return (
            <div key={idx} className="claim-card">
              <div className="claim-info">
                <h3 className="claim-id">{claim.id}</h3>
                <p className="claim-model">{claim.model}</p>

                <div className="claim-rows">
                  <div>
                    <span className="label">Device id</span>
                    <p className="value issue">{claim.deviceId}</p>
                  </div>
                  <div>
                    <span className="label">Issue</span>
                    <p className="value ">{claim.issue}</p>
                  </div>
                </div>

                <div className="claim-date">
                  <span className="label">Date</span>
                  <p className="date-box">{claim.date}</p>
                </div>
              </div>

              <div className="claim-status" style={{ }}>
                <div className={`card-badge ${claim.status}`} style={{ }}>
                  <FaShieldAlt size={30} style={{ color: styles.color }} />
                </div>
                <span className={`status-text ${claim.status}_normal`} style={{ color: styles.color }}>
                  {claim.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
