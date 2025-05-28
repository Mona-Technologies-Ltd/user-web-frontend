import React, { useState } from "react";
import { Modal, Select, Input, Radio, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./NewClaimModal.css";
import ClaimSuccessModal from "./ClaimSuccessModal";

const { TextArea } = Input;
const issueOptions = [
  "Broken Screen Complete",
  "Broken Inner Screen Only",
  "Broken Outer Screen Only",
  "Not Charging",
  "Back Housing/Cover",
  "Back Camera not Working",
  "Front Camera not Working",
  "Sim-card not working",
  "Water Damage",
  "Smashed Device",
  "Motherboard Issue",
  "Audio Issues (Microphone/Speaker)",
  "Others",
];
const devices = [
  {
    id: "iphone-11",
    brand: "Apple",
    model: "iPhone 11 Pro Max",
    imei: "123456789012345",
    status: "Active",
  },
  {
    id: "iphone-13",
    brand: "Apple",
    model: "iPhone 13",
    imei: "987654321098765",
    status: "Active",
  },
  {
    id: "samsung-s22",
    brand: "Samsung",
    model: "Galaxy S22",
    imei: "555666777888999",
    status: "Inactive",
  },
];

const NewClaimModal = ({ visible, onClose }) => {
  const [selectedIssues, setSelectedIssues] = useState([]);
  const [claimType, setClaimType] = useState("accidental");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleIssueChange = (value) => {
    setSelectedIssues(value);
  };

  const handleSubmit = () => {
    // Show the success modal
    setShowSuccess(true);

    // Close the parent modal
    onClose();
  };

  return (
    <>
      <Modal
        open={visible}
        onCancel={onClose}
        footer={null}
        width={600}
        closeIcon={<CloseOutlined />}
        className="claim-modal"
      >
        <div className="modal-header">
          <h2>New claim</h2>
          <p>File claim to fix your device</p>
        </div>

        <div className="modal-body">
          {/* <label>My Device</label>
          <Select
            placeholder="Select device"
            className="full-width"
            options={[{ value: "iPhone 13", label: "iPhone 13" }]}
            style={{ background: "#E8F2FF59" }}
          /> */}
          <label>My Device</label>
<Select
  placeholder="Select device"
  className="full-width custom-device-select"
  options={devices.map((device) => ({
    value: device.id,
    label: (
      <div className="device-option" key={device.id}>
        <div className="device-info">
          <div className="device-name">
            {device.brand === "Apple" && <span role="img" aria-label="apple">
                <img src="/apples.svg" />
              </span>}{" "}
            {device.brand} – {device.model}
          </div>
          <div className="device-imei">IMEI: {device.imei}</div>
        </div>
        <div
          className={`device-status ${
            device.status.toLowerCase() === "active" ? "active" : "inactive"
          }`}
        >
          {device.status}
        </div>
      </div>
    ),
  }))}
/>


          <label>Issue Type</label>
         <Select
  mode="multiple"
  allowClear
  placeholder="Select issue(s)"
  value={selectedIssues}
  onChange={handleIssueChange}
  className="full-width"
  maxTagCount={3}
  maxTagPlaceholder={(omittedValues) => `+${omittedValues.length} more`}
  options={issueOptions.map((issue) => ({
    value: issue,
    label: issue,
  }))}
/>


          <label>When</label>
          <Input placeholder="Enter time of issue" className="full-width" />

          <label>Where</label>
          <Input placeholder="Enter location" className="full-width" />

          <label>How</label>
          <TextArea rows={4} placeholder="Describe how the issue happened" />

          <label>Claim Type</label>
          <Radio.Group
            onChange={(e) => setClaimType(e.target.value)}
            value={claimType}
            className="claim-radio"
          >
            <Radio value="accidental">Accidental Damage</Radio>
            <Radio value="non-accidental">Non-Accidental Damage</Radio>
          </Radio.Group>

          <label>State</label>
          <Select
            placeholder="Select your state"
            className="full-width"
            options={[{ value: "Lagos", label: "Lagos" }]}
          />

          <label>City</label>
          <Select
            placeholder="Select your city"
            className="full-width"
            options={[{ value: "Ikeja", label: "Ikeja" }]}
          />

          <Button
            type="primary"
            block
            className="submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Modal>

      <ClaimSuccessModal
        visible={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};

export default NewClaimModal;
