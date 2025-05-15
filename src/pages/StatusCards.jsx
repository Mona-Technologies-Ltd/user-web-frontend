import React from "react";
import "./StatusCards.css";
import { FaShieldAlt } from "react-icons/fa";

const cardsData = [
  { status: "Pending", color: "pending" },
  { status: "Approved", color: "approved" },
  { status: "Completed", color: "completed" },
  { status: "Uncategorized", color: "uncategorized" },
  { status: "Completed", color: "completed" },
  { status: "Completed", color: "completed" },
  { status: "Completed", color: "completed" },
  { status: "Completed", color: "completed" },
  { status: "Rejected", color: "rejected" },
];

const StatusCards = ({showDetailsModal}) => {
  return (
    <div className="cards-grid">
      {cardsData.map((card, index) => (
        <div className="cardStatue" key={index}>
          <div className="cardStatue-left">
            <div className="claim-id">CL–134763</div>
            <div className="device-name">iPhone 13 Pro MAX</div>
            <div className="deviceStatue-details">
              <div className="detail-block">
                <span className="label">Device id</span>
                <div className="value">IP12567</div>
              </div>
              <div className="detail-block">
                <span className="label">Issue</span>
                <div className="value">Damaged screen</div>
              </div>
            </div>
            <div className="dateStatue-block">
              <span className="label">Date</span>
              <div className="dateStatue">Dec 6, 2024</div>
            </div>
          </div>
         <div className="badge_statue_cover">
           <div className={`card-badge ${card.color}`}>
                <FaShieldAlt size={30}  className={`${card.color}_normal_icon`} />
          </div>
          <div className={`badge-label ${card.color}_normal`} style={{ background: card.color}}>
            {card.status}
    
            </div>
         </div>
        </div>
      ))}
    </div>
  );
};

export default StatusCards;
