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
      <DashBoard width="100%" max-width="">
        <Chart>
          <img
            style={{ width: "100%", height: "100%", borderRadius: "17px" }}
            src="img/image 31.png"
          ></img>
        </Chart>
        <RightBox>
          <Head>
            <Title>Swap</Title>
            <SettingIcon>
              <img src="img/Setting.png" />
            </SettingIcon>
          </Head>
          <Main width="100%">
            <GList width="100%">
              <GListItem width="100%">
                <Lefter>
                  <FromTo>From</FromTo>
                  <ZerodotZero>0.0</ZerodotZero>
                </Lefter>
                <Righter>
                  <img
                    style={{ width: "28px", height: "28px" }}
                    src="img/inf_purple.png"
                  ></img>
                  <SC>HSC</SC>
                  <GDown>
                    <img src="img/Vector 1.png"></img>
                  </GDown>
                </Righter>
              </GListItem>
              <GListItem width="100%">
                <Lefter>
                  <FromTo>From</FromTo>
                  <ZerodotZero>0.0</ZerodotZero>
                </Lefter>
                <Righter>
                  <img
                    style={{ width: "28px", height: "28px" }}
                    src="img/inf_cyan.png"
                  ></img>
                  <SC>BSC</SC>
                  <GDown>
                    <img src="img/Vector 1.png"></img>
                  </GDown>
                </Righter>
              </GListItem>
            </GList>
            <GButtonGroup>
              <GDownButton></GDownButton>
              <GButton top={"65px"} minWidth="168px">
                Connect to a wallet
              </GButton>
            </GButtonGroup>
          </Main>
          <Foot></Foot>
        </RightBox>
      </DashBoard>
      <Footer>
        <Recommendation>Recommended Gas Prices in Gwei</Recommendation>
        <PriceList>
          <Price>
            <Cost>62</Cost>
            <GDivider></GDivider>
            <Detail>
              STANDARD <span style={{ color: "#3FA9F5" }}>&lt; 15.9M</span>
            </Detail>
          </Price>
          <Price>
            <Cost>97</Cost>
            <GDivider></GDivider>
            <Detail>
              FAST <span style={{ color: "#3FA9F5" }}>&lt; 0.5M</span>
            </Detail>
          </Price>
          <Price m={"0"}>
            <Cost>97</Cost>
            <GDivider></GDivider>
            <Detail>
              FAST <span style={{ color: "#3FA9F5" }}>&lt; 0.5M</span>
            </Detail>
          </Price>
        </PriceList>
      </Footer>
    </StyledContainer>
  );
}

const GList = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const GListItem = styled(Box)`
  background: #0d0f11;
  border-radius: 66.012px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
  padding: 10px 30px;
`;
const Lefter = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FromTo = styled(Box)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  color: #e5e5e5;
`;
const ZerodotZero = styled(Box)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 83%;

  color: #7c95fe;
`;
const SC = styled(Box)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18.7034px;
  line-height: 97%;

  color: #e5e5e5;
`;
const Righter = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const GButtonGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GDownButton = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3050d1;
  padding: 22px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  background-image: url("img/arrow-down.png");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  top: -125px;
  margin: 0;
  margin-bottom: -70px;
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
  @media screen and (max-width: 700px) {
    padding: 11px 19px;
    line-height: 80%;
  }
`;
const GDown = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background-color: white;
  opacity: 0.8;
  box-shadow: 0px 5.2431px 35.653px rgba(72, 128, 255, 0.34);
  border-radius: 14.6807px;
  cursor: pointer;
`;
const Head = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 20px;
`;
const Title = styled(Box)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 13px;
`;
const SettingIcon = styled(Box)``;
const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;
const Foot = styled(Box)``;
const Logo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 700px) {
    margin-top: -60px;
  }
  position: relative;
  z-index: 3;
`;
const Chart = styled(Box)`
  border: 1px solid #879fff;
  border-radius: 17px;
  //width: 754px;
  flex: 8;
  height: auto;
  height: 343px;
  margin: 0 2.34% 0 6.25%;
  width: 58%;
  /* margin-left: 78px; */
  /* margin-right: 30px; */
  margin-left: 6.25%;
  @media screen and (max-width: 700px) {
    margin: 0 !important;
    width: 90%;
    height: 343px;
  }
`;
const RightBox = styled(Box)`
  //width: 500px;
  width: 38.5%;
  flex: 4;
  background: rgba(7, 8, 9, 0.35);
  border-radius: 23px;
  padding: 30px 40px 40px 30px;
  margin: 0 6.25% 0 0;
  @media screen and (max-width: 700px) {
    margin: 0;
    align-self: center;
    width: 90%;
  }
`;
const DashBoard = styled(Box)`
  /* background: rgba(7, 8, 9, 0.35); */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
  position: relative;
  z-index: 3;
`;
const Footer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0 60px 0;
  position: relative;
  z-index: 3;
`;
const Recommendation = styled(Box)`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 60%;
  padding: 0px 30px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 40px;
  @media screen and (max-width: 700px) {
    line-height: 125%;
  }
`;
const PriceList = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 678px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: 40vh;
  }
`;
const Price = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
const Cost = styled(Box)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 103%;
  color: #ffffff;
`;
const GDivider = styled(Box)`
  width: 100px;
  height: 0;
  border: 1px dashed #bbb;
  margin: 7px 0px 16px 0px;
`;
const Detail = styled(Box)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 98%;
  color: #ffffff;
`;
const StyledContainer = styled(Box)`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Home;
