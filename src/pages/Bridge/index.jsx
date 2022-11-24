/* eslint-disable jsx-a11y/alt-text */
import { Box, useMediaQuery } from "@mui/material";
import styled from "styled-components";

function Home() {
  const sm = useMediaQuery("(max-width : 700px)");

  return (
    <StyledContainer>
      <Logo>
        <img src="img/logo.png" />
        {!sm ? (
          <img src="img/image 32.png" />
        ) : (
          <GButton margin={"10px 0"}>Connect to a wallet</GButton>
        )}
      </Logo>
      <ColumnLayout>
        <UnlockDialog mt={"56px"} width="90%" maxWidth={"568px"}>
          <RowToColumnLayout
            mb="20px"
            justifyContent={"space-between"}
            width="100%"
          >
            <Label>Cross-Chain Token Bridge</Label>
            <RowLayout gap="12px">
              <GreenButton style={{ padding: "13.2px 30px" }}>
                Bridge
              </GreenButton>
              <GreenButton style={{ padding: "13.2px 17.5px" }}>
                Exchange
              </GreenButton>
            </RowLayout>
          </RowToColumnLayout>
          <GListItem mb="14px" justifyContent={"space-between"} width="100%">
            <RowLayout>
              <img src="img/inf_purple.png"></img>
              <Box
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "100%",
                  color: "#E5E5E5",
                  margin: "0 0 0 16px",
                }}
              >
                DSC
              </Box>
            </RowLayout>
            <DropButton as="button">
              <img src="img/Vector 1.png"></img>
            </DropButton>
          </GListItem>
          <RowLayout mb="14px">
            <GButton
              width={"44px"}
              height={"44px"}
              padding={"0"}
              margin="-22px"
            >
              <img src="img/arrow-down.png"></img>
            </GButton>
          </RowLayout>
          <GListItem mb="46.5px" justifyContent={"space-between"} width="100%">
            <RowLayout>
              <img src="img/inf_cyan.png"></img>
              <Box
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "100%",
                  color: "#E5E5E5",
                  margin: "0 0 0 16px",
                }}
              >
                HSC
              </Box>
            </RowLayout>
            <DropButton as="button">
              <img src="img/Vector 1.png"></img>
            </DropButton>
          </GListItem>
          <GListItem mb="25px" justifyContent={"space-between"} width="100%">
            <Box
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "100%",
                color: "#E5E5E5",
                margin: "0 0 0 16px",
              }}
            >
              Token
            </Box>
            <RowLayout>
              <img
                src="img/TGlobe.png"
                width="29px"
                height="29px"
                style={{ padding: "0", margin: "0 9px 0 0" }}
              ></img>
              <Box
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "100%",
                  color: "#E5E5E5",
                  margin: "0 10.5px 0 0",
                }}
              >
                USDT
              </Box>
              <DropButton as="button">
                <img src="img/Vector 1.png"></img>
              </DropButton>
            </RowLayout>
          </GListItem>
          <RowLayout>
            <GButton fontSize={"16px"} lineHeight={"83%"} mb='60px'>
              Unlock wallet
            </GButton>
          </RowLayout>
        </UnlockDialog>
      </ColumnLayout>
    </StyledContainer>
  );
}

const Label = styled(Box)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 63%;
  color: #e5e5e5;
  margin: 0;
  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;
const DropButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12.5px 19.5px;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.8;
  box-shadow: 0px 5.2431px 35.653px rgba(72, 128, 255, 0.34);
  border-radius: 14.6807px;
  border: 0;
`;
const GListItem = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-betweeen;
  background: #0f131a;
  border-radius: 66.012px;
  padding: 14px 20px;
`;
const GreenButton = styled.button`
  padding: 13px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #029d95;
  border-radius: 6.6012px;
  border: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 83%;

  color: #ffffff;
`;
const RowLayout = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const RowToColumnLayout = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const ColumnLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const UnlockDialog = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  flex: 10 0 0;
  @media screen and (max-width: 700px) {
    margin-top: 36px io !important;
  }
`;

const GButton = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3050d1;
  padding: 15px 25px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  position: relative;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 100%;
  /* align-self: flex-end;
  flex: none;
  order: 0;
  flex-grow: 0; */
`;
const Logo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    margin-top: -60px;
  }
`;

const StyledContainer = styled(Box)`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Home;
