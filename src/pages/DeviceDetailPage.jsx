import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DeviceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock device data - in a real app, fetch this based on the id
  const device = {
    id: id,
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
    claims: [
      {
        claimId: "PLU3766",
        issue: "Damaged screen",
        date: "Dec 6, 2024",
        status: "In progress",
      },
      {
        claimId: "PLU3766",
        issue: "Damaged screen",
        date: "Dec 6, 2024",
        status: "Done",
      },
    ],
    coverage: [
      "Accidental Damage",
      "Hardware Failure (Impact)",
      "Repair Guaranteed",
    ],
  };

  return (
    <Container>
      <ContentWrapper>
        <LeftSection>
          <DeviceImage
            src={device.deviceImage}
            alt={`${device.brand} device`}
          />
          <FileClaimButton>File New Claim</FileClaimButton>
        </LeftSection>

        <RightContentSection>
          <TopRowContainer>
            <MiddleSection>
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
            </MiddleSection>

            <ClaimsSection>
              <ClaimsHeader>
                Claims <ClaimsCount>({device.claims.length})</ClaimsCount>
              </ClaimsHeader>

              <ClaimsList>
                {device.claims.map((claim, index) => (
                  <ClaimItem key={index}>
                    <ClaimRow>
                      <ClaimLabel>Claim id</ClaimLabel>
                      <ClaimValue>{claim.claimId}</ClaimValue>
                    </ClaimRow>
                    <ClaimRow>
                      <ClaimLabel>Issue</ClaimLabel>
                      <ClaimValue>{claim.issue}</ClaimValue>
                    </ClaimRow>
                    <ClaimRow>
                      <ClaimLabel>Date</ClaimLabel>
                      <ClaimValue>{claim.date}</ClaimValue>
                    </ClaimRow>
                    <ClaimRow>
                      <ClaimLabel>Status</ClaimLabel>
                      <StatusBadge status={claim.status}>
                        {claim.status}
                      </StatusBadge>
                    </ClaimRow>
                  </ClaimItem>
                ))}
              </ClaimsList>
            </ClaimsSection>
          </TopRowContainer>

          <ProtectionPlanSection>
            <ProtectionPlanTitle>Protection Plan Details</ProtectionPlanTitle>
            <ProtectionPlanContent>
              <DatesSection>
                <DateBox>
                  <DateLabel>Date Onboarded</DateLabel>
                  <DateValue>{device.dateOnboarded}</DateValue>
                </DateBox>
                <DateBox>
                  <DateLabel>Expiry date</DateLabel>
                  <DateValue>{device.expiryDate}</DateValue>
                </DateBox>
              </DatesSection>

              <CoverageSection>
                <CoverageLabel>Coverage</CoverageLabel>
                <CoverageItems>
                  {device.coverage.map((item, index) => (
                    <CoverageItem key={index}>{item}</CoverageItem>
                  ))}
                </CoverageItems>
              </CoverageSection>

              <RenewButton>Renew plan</RenewButton>
            </ProtectionPlanContent>
          </ProtectionPlanSection>
        </RightContentSection>
      </ContentWrapper>
    </Container>
  );
};

// Styled Components
const Container = styled.div``;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #38b6ff;
  font-weight: 500;
  padding: 0;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 220px;
`;

const DeviceImage = styled.img`
  height: 650px;
  object-fit: contain;
`;

const FileClaimButton = styled.button`
  background-color: #e8f2ff;
  color: #38b6ff;
  border: 1px solid #38b6ff;
  padding: 12px 20px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
`;

const RightContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 800px;
  flex: none;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

const TopRowContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: stretch;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 320px;
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
`;

const ClaimsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  flex: none;
  height: 305px;
  overflow: hidden;
`;

const ClaimsHeader = styled.div`
  background-color: #e6f0fa;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const ClaimsCount = styled.span`
  margin-left: 8px;
  color: #38b6ff;
`;

const ClaimsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: #e6f0fa;
  height: calc(100% - 52px); /* Subtract header height */
  overflow-y: auto;
`;

const ClaimItem = styled.div`
  background-color: #ffffff;
  padding: 16px;
`;

const ClaimRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ClaimLabel = styled.span`
  color: #38b6ff;
  font-size: 14px;
`;

const ClaimValue = styled.span`
  color: #38b6ff;
  font-weight: 500;
`;

const StatusBadge = styled.span`
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ status }) =>
    status === "Done"
      ? "#d4edda"
      : status === "In progress"
      ? "#fff3cd"
      : "#f8d7da"};
  color: ${({ status }) =>
    status === "Done"
      ? "#155724"
      : status === "In progress"
      ? "#856404"
      : "#721c24"};
`;

const ProtectionPlanSection = styled.div`
  border: 1px solid rgba(79, 70, 229, 0.45);
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto;
`;

const ProtectionPlanTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: 16px;
`;

const ProtectionPlanContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const DatesSection = styled.div`
  display: flex;
  gap: 16px;
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

const CoverageSection = styled.div`
  background-color: #e6f0fa;
  padding: 12px;
`;

const CoverageLabel = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
  text-align: center;
`;

const CoverageItems = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CoverageItem = styled.div`
  background-color: #38b6ff;
  color: white;
  padding: 6px 12px;
  font-size: 14px;
`;

const RenewButton = styled.button`
  background-color: #38b6ff;
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
`;

export default DeviceDetailPage;
