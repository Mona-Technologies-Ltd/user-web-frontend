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
    }
    ,
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
           <div className="device_resolve" style={{ display:'flex' }}>

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
           </div>

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
// const Container = styled.div`
//   margin: 0 auto;
// `;
const Container = styled.div`
  margin: 0 auto;
  padding: 24px 16px;
  max-width: 1200px; /* Keeps content from stretching too wide */
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
  padding: 0 16px;
`;

const DeviceCard = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  padding: 24px;
  gap: 24px;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;



const DeviceImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 180px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DeviceImage = styled.img`
  height: 255px;
  object-fit: contain;

   @media (max-width: 768px) {
     height: 125px;
  }
`;

const ViewDetailsButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #004aad;
  color: #004aad;
  background: #D7F0FF59;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  width: 60%;
  text-align: center;

  &:hover {
    background-color: rgba(0, 112, 243, 0.05);
  }

    @media (max-width: 768px) {
        width: 70%;
       padding: 3px 4px;
       font-weight: 200;
       font-size: .5rem;
        border: .6px solid #004aad;
  }
`;


const DeviceInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 300px;

  @media (max-width: 768px) {
   width: 150px;
    gap: 5px;
  }
`;

const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(79, 70, 229, 0.45);
  padding: 16px;


  @media (max-width: 768px) {
    padding: 6px;
    gap: 6px;
  }
`;

const BrandLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;


    @media (max-width: 768px) {
      width: 25px;
  height: 25px;
  }
`;

const BrandName = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #00439e;

  @media (max-width: 768px) {
 font-size: 15px;
  font-weight: 300;
  }
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid rgba(79, 70, 229, 0.45);
  padding: 16px;
  box-shadow: 0 0 5px 14px #E8F2FF73;


  @media (max-width: 768px) {
 gap: 5px;
  padding: 8px;
  }
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailLabel = styled.span`
  color: #004AADA6;
  font-size: 13px;
  font-weight: 400;


    @media (max-width: 768px) {
 font-size: 8px;
  font-weight: 300;
  }
`;

const DetailValue = styled.span`
  color: #004AAD;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;


      @media (max-width: 768px) {
 font-size: 7px;
  font-weight: 200;
    gap: 8px;
  }
`;

const EditIcon = styled.span`
  cursor: pointer;
  font-size: 12px;
`;


const PlanDetailsContainer = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const PlanDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(79, 70, 229, 0.45);
  padding: 16px;


    @media (max-width: 768px) {
      width: 80%;
  border: 1px solid rgba(79, 70, 229, 0.45);
  padding: 16px;
  }
`;

const PlanDetailsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;


      @media (max-width: 768px) {
    font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
  }
`;


const DateContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DateBox = styled.div`
  flex: 1;
  background-color: #DEE7FF59;
  padding: 12px;
  text-align: center;
`;

const DateLabel = styled.div`
  color: #8A8894;
  font-size: 14px;
  margin-bottom: 8px;
`;

const DateValue = styled.div`
  color: #38B6FF;
  font-weight: 500;
  background: #E6F0FA;
  width: 50%;
  margin: auto;
`;

const RenewButton = styled.button`
  padding: 12px;
  background-color: #E8F2FF;
  color: #38B6FF;
  border: 1px solid #38B6FF;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;


      @media (max-width: 768px) {
        width: 80%;
    padding: 6px;
  font-weight: 300;
 
  }
`;

export default DevicesPage;
