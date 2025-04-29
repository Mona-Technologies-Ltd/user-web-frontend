import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const DevicesPage = () => {
  const navigate = useNavigate();

  const deviceData = [
    {
      id: 1,
      brand: "Samsung",
      brandLogo: "/samsung.svg",
      deviceImage: "/iphone11colorfull.svg",
      model: "Fold 5",
      nickname: "My fav",
      deviceId: "PLU3766",
      phoneNumber: "08129171O4367",
      imei: "16254242826262",
      onboardingCenter: "Mona Tech",
      dateOnboarded: "Dec 6, 2024",
      expiryDate: "Dec 6, 2024",
    },
    {
      id: 2,
      brand: "Apple",
      brandLogo: "/iphonelogo.svg",
      deviceImage: "/iPhone11.svg",
      model: "Fold 5",
      nickname: "My fav",
      deviceId: "PLU3766",
      phoneNumber: "08129171O4367",
      imei: "16254242826262",
      onboardingCenter: "Mona Tech",
      dateOnboarded: "Dec 6, 2024",
      expiryDate: "Dec 6, 2024",
    },
  ];

  const handleViewDetails = (deviceId) => {
    navigate(`/devices/${deviceId}`);
  };

  return (
    <Container>
      <DevicesList>
        {deviceData.map((device) => (
          <DeviceCard key={device.id}>
            <DeviceImageSection>
              <DeviceImage
                src={device.deviceImage}
                alt={`${device.brand} device`}
              />
              <ViewDetailsButton onClick={() => handleViewDetails(device.id)}>
                View Details
              </ViewDetailsButton>
            </DeviceImageSection>

            <DeviceInfoSection>
              <BrandSection>
                <BrandLogo
                  src={device.brandLogo}
                  alt={`${device.brand} logo`}
                />
                <BrandName>{device.brand}</BrandName>
              </BrandSection>

              <DetailsSection>
                <DetailRow>
                  <DetailLabel>Model</DetailLabel>
                  <DetailValue>{device.model}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Nickname</DetailLabel>
                  <DetailValue>{device.nickname}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Device id</DetailLabel>
                  <DetailValue>{device.deviceId}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Phone number</DetailLabel>
                  <DetailValue>{device.phoneNumber}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>IMEI</DetailLabel>
                  <DetailValue>{device.imei}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Onboarding center</DetailLabel>
                  <DetailValue>{device.onboardingCenter}</DetailValue>
                </DetailRow>
              </DetailsSection>
            </DeviceInfoSection>

            <PlanDetailsContainer>
              <PlanDetailsSection>
                <PlanDetailsTitle>Protection Plan Details</PlanDetailsTitle>
                <DateContainer>
                  <DateBox>
                    <DateLabel>Date Onboarded</DateLabel>
                    <DateValue>{device.dateOnboarded}</DateValue>
                  </DateBox>
                  <DateBox>
                    <DateLabel>Expiry date</DateLabel>
                    <DateValue>{device.expiryDate}</DateValue>
                  </DateBox>
                </DateContainer>
              </PlanDetailsSection>
              <RenewButton>Renew plan</RenewButton>
            </PlanDetailsContainer>
          </DeviceCard>
        ))}
      </DevicesList>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 600;
`;

const DevicesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DeviceCard = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding: 24px;
  gap: 24px;
`;

const DeviceImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 180px;
`;

const DeviceImage = styled.img`
  height: 255px;
  object-fit: contain;
`;

const ViewDetailsButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #004aad;
  color: #004aad;
  background: #d7f0ff;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: rgba(0, 112, 243, 0.05);
  }
`;

const DeviceInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
`;

const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(79, 70, 229, 0.45);
  padding: 16px;
`;

const BrandLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const BrandName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #00439e;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid rgba(79, 70, 229, 0.45);
  padding: 16px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailLabel = styled.span`
  color: #38b6ff;
  font-size: 14px;
`;

const DetailValue = styled.span`
  color: #38b6ff;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EditIcon = styled.span`
  cursor: pointer;
  font-size: 12px;
`;

const PlanDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
`;

const PlanDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(79, 70, 229, 0.45);
  padding: 16px;
`;

const PlanDetailsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
`;

const DateContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

const DateBox = styled.div`
  flex: 1;
  background-color: #e6f0fa;
  padding: 12px;
  text-align: center;
`;

const DateLabel = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
`;

const DateValue = styled.div`
  color: #38b6ff;
  font-weight: 500;
`;

const RenewButton = styled.button`
  padding: 12px;
  background-color: #e8f2ff;
  color: #38b6ff;
  border: 1px solid #38b6ff;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
`;

export default DevicesPage;
