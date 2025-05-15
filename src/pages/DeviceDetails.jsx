import { BiEditAlt } from "react-icons/bi"; 
import React from 'react';
import './DeviceDetails.css';

const DeviceDetails = () => {
  return (
    <div className="device-section">
      <div className="device-wrapper">
        {/* Left Panel */}
       <div className=''>
       <div className="left-panel">
          <div className="brand-box">
            {/* <img src="/apple-logo.png" alt="Apple" className="apple-logo" /> */}
            <div className='circle_apple'>
              <img src="/apple-logo.svg" alt="Apple" className="apple-logo"  />
            </div>

            <p className="brand-text">Apple</p>
          </div>

        </div>
       <div className="pagination-dots">
  <span className="bar active"></span>
  <span className="bar"></span>
  <span className="bar"></span>
</div>

       </div>
        {/* Center Phone Display */}
        <div className="center-panel">
          {/* <img src="/iphone-frame.png" alt="iPhone" className="phone-image" /> */}
          <img
                src="/iPhone11.svg"
                alt="Mona Logo"
                className="phone-image"
              />
          <button className="claim-button">File New Claim</button>
        </div>

        {/* Right Info Panel */}
        <div className="right-panel">
          <div className="info-box">
            <div className="info-item">
              <span className="label">Model</span>
              <span className="value">iPhone 13 Pro Max</span>
            </div>
            <div className="info-item">
              <span className="label">Nickname</span>
              <span className="value">My fav <span role="img" aria-label="edit"><BiEditAlt color="#004AAD" /></span></span>
            </div>
            <div className="info-item">
              <span className="label">Device id</span>
              <span className="value">PLU3766</span>
            </div>
            <div className="info-item">
              <span className="label">Phone number</span>
              <span className="value">0812917104367</span>
            </div>
            <div className="info-item">
              <span className="label">IMEI</span>
              <span className="value">16254242826262</span>
            </div>
            <div className="info-item">
              <span className="label">Onboarding center</span>
              <span className="value">Mona Tech</span>
            </div>
          </div>

          <div className="plan-box">
            <h4 className="plan-title">Protection Plan Details</h4>
            <div className="plan-dates">
              <div className="plan-item">
                <span className="label">Date Onboarded</span>
                <span className="date">Dec 6, 2024</span>
              </div>
              <div className="plan-item">
                <span className="label">Expiry date</span>
                <span className="date">Dec 6, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;
