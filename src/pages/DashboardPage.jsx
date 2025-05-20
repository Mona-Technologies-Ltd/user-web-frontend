import React from "react";
import { Row, Col } from "antd";
import { Icon } from "@iconify/react";
import DeviceDetails from "./DeviceDetails";
import UserProfile from "./UserProfile";
import RecentClaims from "./claims/RecentClaims";

const DashboardPage = () => {
  const deviceInfo = {
    model: "iPhone 13 Pro Max",
    nickname: "My fav",
    deviceId: "PLU3766",
    phoneNumber: "08129171104367",
    imei: "16254242826262",
    onboardingCenter: "Mona Tech",
  };

  const userInfo = {
    name: "John Doe",
    role: "Customers",
    phone: "081 4939 4586",
    email: "Johndoe23@gmail.com",
  };

  const recentClaims = [
    {
      id: "CL-134763",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "In progress",
    },
    {
      id: "CL-134763",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "Approved",
    },
    {
      id: "CL-134763",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "Approved",
    },
  ];

  const alerts = [
    {
      type: "Claims update",
      message:
        "Lorem ipsum dolor sit amet consectetur. Ut mattis pellentesque tellus.",
      icon: "mdi:check-circle",
      color: "#004AAD",
      backgroundColor: "rgba(215, 240, 255, 0.35)",
    },
    {
      type: "Plans update",
      message:
        "Lorem ipsum dolor sit amet consectetur. Ut mattis pellentesque tellus.",
      icon: "mdi:trophy",
      color: "#00B2FF",
      backgroundColor: "rgba(215, 240, 255, 0.35)",
    },
    {
      type: "Promo",
      message: "Use 'MONATECH5' to access 5% off claim support from Mona",
      action: "Click here to get started",
      icon: "mdi:bell",
      color: "#004AAD",
      backgroundColor: "rgba(215, 240, 255, 0.35)",
    },
  ];

  return (
    <Row gutter={[24, 24]} className="dashboard-container">
      
        {/* <Col flex="1" className="dashboard-sidebar">
           
        <div style={{ width:'100%', display:'flex' }}>
       
      </div> */}
        {/* <div className="user-profile">
          <img
            src="/profile-placeholder.svg"
            alt="Profile"
            className="profile-image"
          />
          <div className="user-info">
            <h3>{userInfo.name}</h3>
            <span>{userInfo.role}</span>
          </div>
          <div className="contact-info">
            <div
              className="contact-item"
              style={{
                background: "#F5FAFF",
                padding: "16px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <Icon
                icon="mdi:phone"
                style={{ color: "#00B2FF" }}
                width="20"
                height="20"
              />
              <span
                style={{
                  color: "#00B2FF",
                }}
              >
                {userInfo.phone}
              </span>
            </div>
            <div
              className="contact-item"
              style={{
                background: "#F5FAFF",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
              }}
            >
              <Icon
                icon="mdi:email"
                style={{ color: "#00B2FF" }}
                width="20"
                height="20"
              />
              <span
                style={{
                  color: "#00B2FF",
                }}
              >
                {userInfo.email}
              </span>
            </div>
          </div>
        </div> */}

        {/* <div className="alerts-section">
          <h2 style={{ fontSize: "24px", marginBottom: "8px" }}>Alert</h2>
          <p
            className="support-text"
            style={{ color: "#667085", marginBottom: "24px" }}
          >
            Need help? Our support team has you covered
          </p>
          <div
            className="alerts-list"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {alerts.map((alert, index) => (
              <div
                key={index}
                className="alert-card"
                style={{
                  border: `1px solid ${alert.color}`,
                  padding: "16px",
                  position: "relative",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  backgroundColor: alert.backgroundColor,
                }}
              >
                <div
                  className="alert-icon"
                  style={{
                    backgroundColor: alert.color,
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    icon={alert.icon}
                    color="white"
                    width="20"
                    height="20"
                  />
                </div>
                <div className="alert-content">
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      marginBottom: "4px",
                      color: "#101828",
                    }}
                  >
                    {alert.type}
                  </h4>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#667085",
                      marginBottom: alert.action ? "8px" : "0",
                    }}
                  >
                    {alert.message}
                  </p>
                  {alert.action && (
                    <a
                      href="#"
                      className="alert-action"
                      style={{
                        color: "#2E90FA",
                        textDecoration: "underline",
                        fontSize: "14px",
                        display: "block",
                      }}
                    >
                      {alert.action}
                    </a>
                  )}
                </div>
                <button
                  className="close-alert"
                  style={{
                    position: "absolute",
                    top: "12px",  
                    right: "12px",
                    background: "none",
                    border: "none",
                    fontSize: "20px",
                    cursor: "pointer",
                    color: "#667085",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div> */}
      {/* </Col> */}
     
      {/* <Col flex="1" className="dashboard-main"> */}
        {/* <div className="device-section">
          <div className="device-info">
            <div className="brand-logo">
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "2px solid #004aad",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/apple-logo.svg" alt="Apple" />
              </div>
              <h1 style={{ color: "#004aad" }}>Apple</h1>
            </div>
            <div className="device-preview">
              <img
                src="/iPhone11.svg"
                alt="Mona Logo"
                style={{ width: "59%" }}
              />
              <button className="file-claim-btn">File New Claim</button>
            </div>
            <div
              className="device-details"
              style={{
                border: "1px solid #004aad",
                padding: "16px",
              }}
            >
              {Object.entries

              (deviceInfo).map(([key, value]) => (
                <div key={key} className="detail-row">
                  <span className="detail-label text-info">
                    {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                  </span>
                  <span className="detail-value" style={{ color: "#00439E" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      
  
      {/* </Col>*/}
{/* <Col flex="100%" className="dashboard-main">
<div style={{ display:'flex', gap:10, height:'28rem',}}>
  <UserProfile />
<DeviceDetails />
</div>
</Col> */}
<Col flex="100%" className="">
{/* <Col flex="100%" className="dashboard-main"> */}
  <div className="profile-device-container">
    <UserProfile />
    <DeviceDetails />
  </div>
</Col>

<Col flex="1" className="dashboard-main"> 
{/* <div className="section-header">
          <h2>Recent Claims</h2>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="claims-section">
          <div className="claims-grid">
            {recentClaims.map((claim, index) => (
              <div key={index} className="claim-card">
                <div className="claim-header">
                  <h3>{claim.id}</h3>
                  <span
                    className={`status ${claim.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {claim.status}
                  </span>
                </div>
                <div className="claim-details">
                  <div className="detail-group">
                    <span>Device id</span>
                    <span>{claim.deviceId}</span>
                  </div>
                  <div className="detail-group">
                    <span>Issue</span>
                    <span>{claim.issue}</span>
                  </div>
                  <div className="detail-group">
                    <span>Amount</span>
                    <span>{claim.amount}</span>
                  </div>
                  <div className="detail-group">
                    <span>Date</span>
                    <span>{claim.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <RecentClaims  />
</Col>
    </Row>
  );
};

export default DashboardPage;
