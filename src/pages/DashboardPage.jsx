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
      
     
<div
  className="dashboard-container"
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    width: "100%",
  }}
>

    <UserProfile />



    <DeviceDetails />

</div>



<Col flex="1" className="dashboard-main"> 

        <RecentClaims  />
</Col>
    </Row>
  );
};

export default DashboardPage;
