import React from "react";
import { Modal, Button } from "antd";
import { CloseOutlined, CopyOutlined, StarFilled } from "@ant-design/icons";
import "./ClaimSuccessModal.css";

const repairShops = [
  {
    id: 1,
    name: "Shop 1",
    title: "PHONEHUBB Capital Abuja",
    address:
      "Suite F8, 4 Aminu Kano Cres, Wuse, Abuja 900288, Federal Capital Territory",
    phone: "0901 003 0191",
    rating: 4,
    reviews: 16,
  },
  {
    id: 2,
    name: "Shop 2",
    title: "PHONEHUBB Capital Abuja",
    address:
      "Suite F8, 4 Aminu Kano Cres, Wuse, Abuja 900288, Federal Capital Territory",
    phone: "0901 003 0191",
    rating: 4,
    reviews: 16,
  },
   {
    id: 3,
    name: "Shop 3",
    title: "PHONEHUBB Capital Abuja",
    address:
      "Suite F8, 4 Aminu Kano Cres, Wuse, Abuja 900288, Federal Capital Territory",
    phone: "0901 003 0191",
    rating: 4,
    reviews: 16,
  },
];

const ClaimSuccessModal = ({ visible, onClose, claimId = "CL-134763" }) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={700}
      closeIcon={<CloseOutlined />}
      className="claim-modal"
    >
      <div className="success-container">
        {/* ✅ Success Animation */}
        <div className="success-animation">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
            <path
              className="checkmark-check"
              fill="none"
              d="M14 27l7 7 17-17"
            />
          </svg>
        </div>

        <h2 className="success-title">Your Claims has been filed successfully!</h2>

        <div className="claim-id-box">
          Claim ID: <span>{claimId}</span> <CopyOutlined />
        </div>

        <p className="success-subtitle">
          Based on your current location, here are the list of repair shops near you
        </p>
<div className="repair-cards-wrapper">
        <div className="repair-cards">
          {repairShops.map((shop) => (
            <div className="repair-card" key={shop.id}>
              <h3>{shop.name}</h3>
              <p className="shop-title">{shop.title}</p>
              <p className="shop-address">{shop.address}</p>
              <p className="shop-phone">{shop.phone}</p>
              <div className="shop-rating">
                <div style={{ display:'flex' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                  <StarFilled
                    key={i}
                    style={{
                      color: i < shop.rating ? "#38B6FF" : "#ccc",
                      marginRight: 2,
                    }}
                  />
                ))}
                </div>
                <div className="review-text">({shop.reviews} Reviews)</div>
              </div>
              <Button  className="copyBtn" block >
                Copy address
               <CopyOutlined />
              </Button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </Modal>
  );
};

export default ClaimSuccessModal;
