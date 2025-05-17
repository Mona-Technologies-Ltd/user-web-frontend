import React from 'react';
import './ClaimDetailsModal.css';
import { FaShieldAlt } from 'react-icons/fa';
import ReviewCardClaim from './ReviewCardClaim';

export default function ClaimDetailsModal({ deviceId, claimId, model, date, issue, status }) {
  return (
    <div className="modal-container">
      {/* Modal Header */}
      <div className="modal-header">
        <div className="header-content">
          <div>
            <p className="device-id">Device id: {deviceId}</p>
            <h3 className="claim-id">{claimId}</h3>
            <p className="deviceName">{model}</p>
          </div>
          <div className={`status-container `}>
            <div className="status-icon">
              {/* Assuming a shield icon is used */}
                               
              <span className={`statusCircle ${status.toLowerCase()}`}> 
                <FaShieldAlt size={30} color={`${status.toLowerCase()}`}  />
                </span>
            </div>
            <p className={` ${status.toLowerCase()}_modal`}>{status}</p>
            
          </div>
        </div>
      </div>

      {/* Date Section */}
      <div className="date-section">
        <span className="label">Date</span>
        <p className="date-box">{date}</p>
      </div>

      {/* Claims Information Section */}
      <div className="claims-info">
        <h3 className="section-title">Claims Information</h3>
        <table className="claims-table">
          <thead>
            <tr>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{issue}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* General Description Section */}
      <div className="general-description">
        <h3 className="section-title">General Description</h3>
        <div className="description-block">
          <h4 className="description-label">When</h4>
          <p className="description-text" id='d_t_m'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="description-block">
          <h4 className="description-label">Where</h4>
          <p className="description-text" id='d_t_m'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </p>
        </div>
        <div className="description-block">
          <h4 className="description-label">How</h4>
          <p className="description-text" id='d_t_m'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </p>
        </div>
      </div>

      {status.toLowerCase() == 'completed' ? (<ReviewCardClaim />): ''}
{/* {status.toLowerCase()} */}

        {status.toLowerCase() == 'rejected' ? (  <div className="description-block" style={{ marginTop:'8rem' }}>
          <h4 className="description-label">Rejection Message</h4>
          <p className="description-text" id='d_t_m'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </p>
        </div>): ''}
     
    </div>
  );
}
