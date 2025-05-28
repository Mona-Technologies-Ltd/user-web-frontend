import React, { useState, useRef, useEffect } from "react";
import {
  Input,
  Button,
  Card,
  Row,
  Col,
  Space,
  Modal,
  Select,
  Radio,
  Form,
  Typography,
  Tag,
  Checkbox,
  Dropdown,
  Table,
} from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  CloseOutlined,
  CopyOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import StatusCards from "./StatusCards";
import { FaShieldAlt } from "react-icons/fa";
import "./StatusCards.css";
import "./RecentClaims.css";
import './Claims.css';
import { FiSearch } from "react-icons/fi";
const { Search } = Input;
const { Option } = Select;
const { TextArea } = Input;
const { Title, Text } = Typography;
import "./ SearchFilterBar.css";
import NewClaimModal from "./NewClaimModal";
import useModalStore from "./store/useModalStore";
import ClaimDetailsModal from "./ClaimDetailsModal";
import { DatePicker } from "antd";

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: none;
  padding: 20px;
  border-radius: 0;

  .ant-card-body {
    padding: 0;
  }

  .claim-id {
    color: #0066cc;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .device-name {
    color: #38b6ff;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .info-group {
    width: 120px;

    .label {
      color: #8c8c8c;
      font-size: 14px;
      margin-bottom: 6px;
    }
    
    .value {
      color: #262626;
      font-size: 15px;
      font-weight: 500;
    }

     .issue{
    color: #8A8894;
    font-weight: 100;
  }
  }

  .info-row {
    display: flex;
    gap: 80px;
    margin-bottom: 18px;
  }

  .amount-container {
    background-color: #D7F0FF59;
    padding: 8px 12px;
    display: inline-block;
    border-radius: 0;
    .amount {
      color: #0066cc;
      font-weight: 600;
      font-size: 16px;
    }
  }

  .date-container {
    background-color: #f0f9ff;
    padding: 8px 12px;
    display: inline-block;
    border-radius: 0;
    .date {
      color: #1890ff;
      font-size: 16px;
    }
  }
    #device_id{
    font-weight: 100;
     color: #8A8894;
     font-size: 13px;
  }
`;

const StatusContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const IconContainer = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px 5px ${(props) => {
    switch (props.status) {
      case "pending":
        return "#FFB82E40";
      case "approved":
        return "rgba(80, 150, 243, 0.251)";
      case "completed":
        return "#00752F40";
      case "rejected":
        return "#FF460240";
      default:
        return "#F0F0F0";
    }
  }};
  background-color: ${(props) => {
    switch (props.status) {
      case "pending":
        return "#f5d49a";
      case "approved":
        return "rgb(84, 137, 218)";
      case "completed":
        return "rgb(150, 194, 150)";
      case "rejected":
        return "#FF460240";
      default:
        return "rgba(33, 37, 44, 0.2)";
    }
  }};
`;

const StatusIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const StatusTag = styled.div`
  padding: 4px 16px;
  /* border-radius: 20px; */
  font-size: 14px;
  font-weight: 500;
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); */
  
  background-color: ${(props) => {
    switch (props.status) {
      case "pending":
        return "#FFF7E6";
      case "approved":
        return "#E6F4FF";
      case "completed":
        return "#E6FFF0";
      case "rejected":
        return "#FFF1F0";
      default:
        return "#F0F0F0";
    }
  }};
  color: ${(props) => {
    switch (props.status) {
      case "pending":
        return "#D46B08";
      case "approved":
        return "#0958D9";
      case "completed":
        return "#389E0D";
      case "rejected":
        return "#CF1322";
      default:
        return "#595959";
    }
  }};
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 0;
    padding: 0;
  }

  .ant-modal-header {
    border-bottom: none;
    padding: 24px 24px 0;
  }

  .ant-modal-body {
    padding: 24px;
  }

  .ant-modal-close {
    top: 20px;
    right: 20px;
  }

  .form-section {
    margin-bottom: 24px;
  }

  .form-label {
    font-weight: 500;
    margin-bottom: 16px;
    font-size: 16px;
    display: block;
    color: #262626;
  }

  .submit-button {
    width: 100%;
    height: 48px;
    font-size: 16px;
    background-color: #0066cc;
    margin-top: 16px;
  }
`;

const StyledSelect = styled(Select)`
  &.ant-select-multiple .ant-select-selector {
    padding: 5px 4px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    height: auto;
    min-height: 50px;
    max-height: 120px;
    overflow-y: auto;
  }

  .ant-select-selection-overflow {
    flex-wrap: wrap;
    min-height: 40px;
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  .ant-select-selection-search {
    margin-bottom: 4px;
  }

  .ant-select-selection-item {
    background-color: #e6f4ff;
    color: #0066cc;
    border: 1px solid #91caff;
    border-radius: 16px;
    margin-right: 8px;
    margin-bottom: 4px;
    padding: 1px 8px;
    height: auto;
    line-height: 22px;
    flex: 0 0 auto;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .ant-select-selection-item-content {
      margin-right: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .ant-select-selection-item-remove {
      color: #0066cc;
      font-size: 12px;
    }
  }

  &.ant-select-focused .ant-select-selector {
    border-color: #40a9ff !important;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

const StyledSuccessModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 0;
    padding: 0;
  }

  .ant-modal-body {
    padding: 24px;
    text-align: center;
  }

  .ant-modal-close {
    top: 20px;
    right: 20px;
  }

  .claim-id-container {
    display: inline-flex;
    align-items: center;
    background-color: #D7F0FF59;
    padding: 12px 24px;
    border: 1px solid #38B6FF;
    border-radius: 4px;
    margin: 24px 0;
  }

  .claim-id {
    color: #0066cc;
    font-size: 18px;
    font-weight: 500;
    margin-right: 8px;
  }

  .copy-icon {
    color: #0066cc;
    cursor: pointer;
  }

  .shops-scroll-container {
    display: flex;
    overflow-x: auto;
    padding: 8px 0;
    gap: 16px;
    scrollbar-width: thin;
    scrollbar-color: #d9d9d9 #f5f5f5;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #d9d9d9;
      border-radius: 3px;
    }

    &::-webkit-scrollbar-track {
      background-color: #f5f5f5;
    }
  }

  .shop-card {
    border: 1px solid #0768E973;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    margin-bottom: 4px;
    /* min-width: 160px; */
    width: 45%;
    flex: 0 0 auto;
    background-color: #E8F2FF59;
  }

  .shop-name {
    font-size: 18px;
    font-weight: 600;
    color: #004aad;
    margin-bottom: 16px;
    text-align: center;
  }

  .shop-address {
    font-size: 14px;
    color: #262626;
    margin-bottom: 16px;
    text-align: center;
  }

  .shop-phone {
    font-size: 14px;
    color: #262626;
    margin-bottom: 16px;
    text-align: center;
  }

  .shop-rating {
    margin-bottom: 16px;
    text-align: center;
  }

  .copy-address-btn {
    background-color: #0066cc;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 0 auto;
  }
`;

const ClaimDetailsModals = styled(Modal)`
 
`;
  const mockClaims = [
    {
      id: "CL-1347632234",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "pending",
    },
    {
      id: "CL-134763",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP1256711",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "approved",
    },
    {
      id: "CL-134733632",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "jan 2, 2025",
      status: "completed",
    },
    {
      id: "CL-133476335",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "uncategorized",
    },
    {
      id: "CL-134768359",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "jan 6, 2025",
      status: "completed",
    },
    {
      id: "CL-134763",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "completed",
    },
    {
      id: "CL-183476356",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "completed",
    },
    {
      id: "CL-095134763",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "completed",
    },
    {
      id: "CL-356134763",
      device: "iPhone 13 Pro MAX",
      deviceId: "IP12567",
      issue: "Damaged screen",
      amount: "₦25,000.00",
      date: "Dec 6, 2024",
      status: "rejected",
    },
  ];

const Claims = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [form] = Form.useForm();
  const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] = useState("");
  const { showModal, openModal, closeModal } = useModalStore(); // Access Zustand state and actions
const [dateRange, setDateRange] = useState([]);

  const [selectedIssues, setSelectedIssues] = useState([
    "damaged_screen",
    "broken_back_glass",
  ]);
  const [generatedClaimId, setGeneratedClaimId] = useState("CL-134763");
// const filteredClaims = mockClaims.filter((claim) => {
//   const matchesSearch = claim.device.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                         claim.id.toLowerCase().includes(searchTerm.toLowerCase());
//   const matchesStatus = statusFilter ? claim.status === statusFilter : true;
//   return matchesSearch && matchesStatus;
// });
const filteredClaims = mockClaims.filter((claim) => {
  const matchesSearch = claim.device.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        claim.id.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesStatus = statusFilter ? claim.status === statusFilter : true;
  
  const matchesDate = dateRange.length === 2
    ? new Date(claim.date) >= new Date(dateRange[0]) &&
      new Date(claim.date) <= new Date(dateRange[1])
    : true;

  return matchesSearch && matchesStatus && matchesDate;
});

  // Map of issue values to labels
  const issueOptions = [
    { value: "Broken Screen Complete", label: "Broken Screen Complete" },
    { value: "Broken Inner Screen Only", label: "Broken Inner Screen Only" },
    { value: "Broken Outer Screen Only", label: "Broken Outer Screen Only" },
    { value: "Not Charging", label: "Not Charging" },
    { value: "Back Housing/Cover", label: "Back Housing/Cover" },
    { value: "Back Camera not Working", label: "Back Camera not Working" },
    { value: "Front Camera not Working", label: "Front Camera not Working" },
    { value: "Sim-card not working", label: "Sim-card not working" },
    { value: "Water Damage", label: "Water Damage" },
    { value: "Smashed Device", label: "Smashed Device" },
    { value: "Motherboard Issue", label: "Motherboard Issue" },
    { value: "Overheating", label: "Overheating" },
    { value: "Audio Issues (Microphone/Speaker)", label: "Audio Issues (Microphone/Speaker)" },
    { value: "Others", label: "Others" },
  ];

  // Handle issue selection change
  const handleIssueChange = (values) => {
    setSelectedIssues(values);
  };

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      console.log("Form values:", values);
      setIsModalOpen(false);
      // Generate a claim ID (using static one from the image for now)
      setGeneratedClaimId("CL-134763");
      // Show success modal
      setIsSuccessModalOpen(true);
      form.resetFields();
    });
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(false);
  };

  const handleCopyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  // Get the status icon based on claim status
  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return "/statusInprogress.svg";
      case "approved":
        return "/statusApprove.svg";
      case "completed":
        return "/statusDone.svg";
      case "rejected":
        return "/statusRejected.svg";
      default:
        return "/stausUncatagorize.svg";
    }
  };


  const shopLocations = [
    {
      id: 1,
      name: "Shop 1",
      shopName: "PHONEHHUBB Capital Abuja",
      address:
        "Suite F8, 4 Aminu Kano Cres, Wuse, Abuja 900288, Federal Capital Territory",
      phone: "0901 003 0191",
      rating: 4,
      reviews: 16,
    },
    {
      id: 1,
      name: "Shop 1",
      shopName: "PHONEHHUBB Capital Abuja",
      address:
        "Suite F8, 4 Aminu Kano Cres, Wuse, Abuja 900288, Federal Capital Territory",
      phone: "0901 003 0191",
      rating: 4,
      reviews: 16,
    },
    {
      id: 2,
      name: "Shop 2",
      shopName: "PHONEHHUBB Capital Abuja",
      address:
        "Suite F8, 4 Aminu Kano Cres, Wuse, Abuja 900288, Federal Capital Territory",
      phone: "0901 003 0191",
      rating: 4,
      reviews: 16,
    },
  ];

  // Add this function to handle opening the details modal
  const showDetailsModal = (claim) => {
    setSelectedClaim(claim);
    setIsDetailsModalOpen(true);
  };

  const handleDetailsModalClose = () => {
    setIsDetailsModalOpen(false);
    setSelectedClaim(null);
  };

  // // Add mock details for the claim
  // const claimDetails = {
  //   items: [
  //     { description: "Screen Damage", amount: "₦50,000" },
  //     { description: "Battery Issue", amount: "₦60,000" },
  //   ],
  //   total: "₦110,000",
  //   when: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  //   where:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  //   how: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  // };

  // // Table columns for claim details
  // const claimsTableColumns = [
  //   {
  //     title: "Description",
  //     dataIndex: "description",
  //     key: "description",
  //   },
  //   {
  //     title: "Amount",
  //     dataIndex: "amount",
  //     key: "amount",
  //     align: "right",
  //   },
  // ];
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

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginBottom: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#f5f7fa",
          borderRadius: "8px",
        }}
      >
        {/* <Search placeholder="Search here" style={{ width: 500 }} size="large" /> */}
        <div className="search-filter-container">
            <div className="search-box" id="s_b_f">
              <FiSearch className="search-icon" />
              <input type="text" 
              placeholder="Search by device or claim ID" 
              value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <select className="status-dropdown"    
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              // style={{
              //     padding: "15px",
              //     paddingRight:"10px",
              //     paddingLeft:"10px",
              //     borderRadius: "4px",
              //     border: "1px solid #ccc",
              //   }}
            >
              <option value="">Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="completed">Completed</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <Space size="middle" id="filter_id">
            {/* <Button
              icon={<FilterOutlined />}
              className="btn_search_id"
              // style={{ height: 48, paddingLeft: 16, paddingRight: 16 }}
              size="large"
            >
              Filter
            </Button> */}
                      <DatePicker.RangePicker
              onChange={(dates) => setDateRange(dates)}
              // style={{ height: 48 }}
              // size="large"
              format="YYYY-MM-DD"
              className="date_fil"
            />

                    
                  
            <Button
              type="primary"
              // style={{ height: 48, paddingLeft: 16, paddingRight: 16 }}
                className="btn_search_id"
              size="large"
              // onClick={showModal}
              onClick={openModal}
            >
              New claim
            </Button>
          </Space>
        
      </div>

      <Row gutter={[16, 16]}>
        {/* <StatusCards /> */}

        {filteredClaims.map((claim, index) => {
                  const styles = getStatusStyles(claim.status);
          return (
          <Col xs={24} sm={12} lg={8} key={index}>
            <StyledCard
              onClick={() => showDetailsModal(claim)}
              
              style={{ cursor: "pointer" }}
            >
              
               <div className="cardStatue" key={index}>
                        <div className="cardStatue-left">
                          <div className="claim-id">{claim.id}</div>
                          <div className="device-name">{claim.device}</div>
                          <div className="deviceStatue-details">
                            <div className="detail-block">
                              <span className="label" id="device_id">Device id</span>
                              <div className="value" >{claim.deviceId}</div>
                            </div>
                            <div className="detail-block">
                              <span className="label" id="device_id">Issue</span>
                              <div className="value">{claim.issue}</div>
                            </div>
                          </div>
                          <div className="dateStatue-block">
                            <span className="label">Date</span>
                            <div className="dateStatue">{claim.date}</div>
                          </div>
                        </div>
                       <div className="badge_statue_cover">
                        
                       
                       </div>
                      </div>

                         

              <StatusContainer>
                 <div className={`${claim.status}_2`}>
                <IconContainer status={claim.status}>
                  <StatusIcon
                    src={getStatusIcon(claim.status)}
                    alt={claim.status}
                  />
                </IconContainer>
                </div>
                <StatusTag status={claim.status}>
                  {claim.status === "pending"
                    ? "Pending"
                    : claim.status.charAt(0).toUpperCase() +
                      claim.status.slice(1)}
                </StatusTag>
                
              </StatusContainer>
            </StyledCard>
          </Col>
        )


      }
      )
        }
      </Row>
 <NewClaimModal visible={showModal} onClose={closeModal} />
 
      <StyledSuccessModal
        open={isSuccessModalOpen}
        onCancel={handleSuccessModalClose}
        footer={null}
        width={600}
        closeIcon={<CloseOutlined />}
      >
        <h1 style={{ fontSize: 28, fontWeight: 600, marginBottom: 10, width:'70%', margin:'auto'}}>
          Your Claims has been filed successfully!
        </h1>

        <div className="claim-id-container">
          <span className="claim-id">Claim ID: {generatedClaimId}</span>
          <CopyOutlined
            className="copy-icon"
            onClick={() => handleCopyText(generatedClaimId)}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 500 }}>
            Based on your current location, here are the list of repair shops
            near you
          </h3>
        </div>

        <div className="shops-scroll-container">
          {shopLocations.map((shop, index) => (
            <div className="shop-card" key={`${shop.id}-${index}`}>
              <div className="shop-name">{shop.name}</div>
              <div className="shop-address">{shop.shopName}</div>
              <div className="shop-address">{shop.address}</div>
              <div className="shop-phone">{shop.phone}</div>
              <div className="shop-rating">
                {[...Array(5)].map((_, idx) =>
                  idx < shop.rating ? (
                    <StarFilled
                      key={idx}
                      style={{ color: "#38B6FF", fontSize: 18 }}
                    />
                  ) : (
                    <StarOutlined
                      key={idx}
                      style={{ color: "#38B6FF", fontSize: 18 }}
                    />
                  )
                )}
                <span style={{ marginLeft: 8, color: "#38B6FF" }}>
                  ({shop.reviews} Reviews)
                </span>
              </div>
              <Button
                className="copy-address-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopyText(shop.address);
                }}
              >
                Copy address <CopyOutlined />
              </Button>
            </div>
          ))}
        </div>
      </StyledSuccessModal>

{/* 👇 INSERT THIS BLOCK HERE */}
{isDetailsModalOpen && selectedClaim && (
  <div className="custom-claim-details-overlay">
<div className={`custom-claim-details-modal ${selectedClaim.status === 'completed' || selectedClaim.status === 'rejected' ? 'custom-claim-details-modal_1' : ''}`}>
      <button className="close-button" onClick={handleDetailsModalClose}>
        <CloseOutlined />
      </button>
      
      <ClaimDetailsModal
        deviceId={selectedClaim.deviceId}
        claimId={selectedClaim.id}
        model={selectedClaim.model}
        date={selectedClaim.date}
        issue={selectedClaim.issue}
        status={selectedClaim.status}
      />
    </div>
  </div>
)}
    </div>
  );
};

export default Claims;
