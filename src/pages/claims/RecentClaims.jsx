import React, { useState } from 'react';

import { FaShieldAlt } from 'react-icons/fa';
import { Modal } from 'antd'; // Ant Design Modal
import ClaimDetailsModal from './ClaimDetailsModal';
import './RecentClaims.css';
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
    id: 'CL–134764',
    model: 'iPhone 14 Pro',
    deviceId: 'IP12568',
    issue: 'Water damage',
    date: 'Jan 3, 2025',
    status: 'Approved',
  },
  {
    id: 'CL–134765',
    model: 'iPhone 15',
    deviceId: 'IP12569',
    issue: 'Battery issue',
    date: 'Feb 14, 2025',
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
  const [selectedClaim, setSelectedClaim] = useState(null);

  const handleCardClick = (claim) => {
    setSelectedClaim(claim);
  };

  const handleModalClose = () => {
    setSelectedClaim(null);
  };

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
            <div
              key={idx}
              className="claim-card"
              onClick={() => handleCardClick(claim)}
              style={{ cursor: 'pointer' }}
            >
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
                    <p className="value">{claim.issue}</p>
                  </div>
                </div>

                <div className="claim-date">
                  <span className="label">Date</span>
                  <p className="date-box">{claim.date}</p>
                </div>
              </div>

              <div className="claim-status">
                <div className={`card-badge ${claim.status}`}>
                  <FaShieldAlt size={30} style={{ color: styles.color }} />
                </div>
                <span
                  className={`status-text ${claim.status}_normal`}
                  style={{ color: styles.color }}
                >
                  {claim.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ Modal for selected claim */}
      <Modal
        open={!!selectedClaim}
        onCancel={handleModalClose}
        footer={null}
         width={650}
           style={{
          borderRadius: '0', // Removes border radius for the entire modal
          overflow: 'hidden',  // Ensures content doesn't overflow if border radius is 0
        }}
 bodyStyle={{
    height: 'auto',
    overflowY: 'auto',
    borderRadius: '0', // For body-level fallback
  }}          className="custom-modal"
      >
        {selectedClaim && (
          <ClaimDetailsModal
            deviceId={selectedClaim.deviceId}
            claimId={selectedClaim.id}
            model={selectedClaim.model}
            date={selectedClaim.date}
            issue={selectedClaim.issue}
            status={selectedClaim.status}
          />  
        )}
      </Modal>
    </div>
  );
}
