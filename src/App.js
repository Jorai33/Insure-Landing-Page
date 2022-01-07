import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import styled from "styled-components";

import Logo from "./ImageComponents/Logo";
import coverImage from "../src/images/image-intro-desktop.jpg";
import snappyProcess from "../src/images/icon-snappy-process.svg";
import prices from "../src/images/icon-affordable-prices.svg";
import peopleFirst from "../src/images/icon-people-first.svg";
import facebook from "../src/images/icon-facebook.svg";
import twitter from "../src/images/icon-twitter.svg";
import pinterest from "../src/images/icon-pinterest.svg";
import instagram from "../src/images/icon-instagram.svg";

// import { IntroPattern } from "./styles/Shapes";
// import introPattern from "../src/images/bg-pattern-intro-right-desktop.svg";

const theme = {
  colors: {
    lightBlack: "#2C2830",
    lightBrown: "#837D88",
    lightViolet: "#2D2641",
    lightBlue: "#96A9C6",
  },
};

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

const Container = styled.div`
  width: 70vw;
  margin: auto;
`;

const Header = styled.header`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  /* li {
    font-family: "Karla", sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 1.5px;
    color: #837d88;
    text-transform: uppercase;
  } */

  & > :last-child {
    a {
      color: #2c2830;
      padding: 0.8rem 1.8rem;
      border: 1.5px solid #2c2830;
      width: 9rem;
    }
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 37.5rem;
  background-color: #2d2641;

  position: relative;
`;

const CoverContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 9.5rem;
  height: 1px;
  background-color: #ffffff;
  display: inline-block;
  margin-top: 6.5rem;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Text = styled.p`
  margin-bottom: 1.5rem;
`;

const PlansButton = styled.a`
  font-family: "Karla", sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: white;
  border: 1.5px solid white;

  width: 9.4rem;
  padding: 0.8rem 1.8rem;
`;

const CoverImage = styled.section`
  width: 34rem;
  height: 40rem;
  margin-top: 6.5rem;
`;

// const Pattern = styled.div`
//   position: absolute;
//   left: 68rem;
//   width: 43.5rem;
// `

const DescriptionContainer = styled(Container)`
  height: 83.5rem;
`;

const ColoredLine = styled(Line)`
  background: #c396c6;
  margin-top: 19rem;
`;

const BlackTitle = styled(Title)`
  color: #2c2830;
  margin-bottom: 6rem;
`;

const Qualities = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

const Icon = styled.div`
  margin-bottom: 2rem;
`;

const Quality = styled.h2`
  color: #2c2830;
  margin-bottom: 1rem;
  text-transform: none;
`;

const QualityDesc = styled.p`
text-transform: none;
  color: #837d88;
`;

const Banner = styled.div`
  width: 100%;
  height: 15.6rem;
  background-color: #2d2641;
  margin-top: 10rem;

  h3 {
    color: white;
  }
`;

const BannerContainer = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WorkButton = styled(PlansButton)`
  /* text-align: center; */
  width: 10.7rem;
`;

const Footer = styled.footer`
  width: 100%;
  height: 30rem;
  background-color: #fafafa;
  padding-top: 4rem;
`;

const FooterContainer = styled(Container)`
`;

const FooterHeader = styled(Header)`
 
`;

const FooterLine = styled(Line)`
  width: 100%;
  background: #DADADA;
  margin-top: 2.25rem;
  margin-bottom: 3rem;
`;

const LastInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Company = styled.ul`
  &>:first-child{
    margin-bottom: 2.25rem;
  }
  
  &>:nth-child(n+2){
    color: #2D2641;
    margin-bottom: 1rem;
  }

`;

const Help = styled(Company)``;
const Contact= styled(Company)``;
const Others = styled(Company)``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <Container>
          <Header>
            <Logo />
            <Navbar>
              <li>How we work</li>
              <li>Blog</li>
              <li>Account</li>
              <li>
                <a href="#">View Plans</a>
              </li>
            </Navbar>
          </Header>
        </Container>
        <Cover>
          {/* <Pattern>
            <img src={introPattern} alt="pattern" />
          </Pattern> */}
          <CoverContainer>
            <Content>
              <Line />
              <Title>
                Humanizing <br /> your insurance.
              </Title>
              <Text>
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </Text>
              <PlansButton href="#">View Plans</PlansButton>
            </Content>
            <CoverImage>
              <img src={coverImage} alt="Walking Family" />
            </CoverImage>
          </CoverContainer>
        </Cover>
        <DescriptionContainer>
          <ColoredLine />
          <BlackTitle>We're different</BlackTitle>
          <Qualities>
            <li>
              <Icon>
                <img src={snappyProcess} alt="Thunder" />
              </Icon>
              <Quality>Snappy Process</Quality>
              <QualityDesc>
                Our application process can be completed in minutes, not hours.
                Don’t get stuck filling in tedious forms.
              </QualityDesc>
            </li>
            <li>
              <Icon>
                <img src={prices} alt="Money" />
              </Icon>
              <Quality>Affordable Prices</Quality>
              <QualityDesc>
                We don’t want you worrying about high monthly costs. Our prices
                may be low, but we still offer the best coverage possible.
              </QualityDesc>
            </li>
            <li>
              <Icon>
                <img src={peopleFirst} alt="People" />
              </Icon>
              <Quality>People First</Quality>
              <QualityDesc>
                Our plans aren’t full of conditions and clauses to prevent
                payouts. We make sure you’re covered when you need it.
              </QualityDesc>
            </li>
          </Qualities>
          <Banner>
            <BannerContainer>
              <h3>
                Find out more <br /> about how we work
              </h3>
              <WorkButton href="#">How we work</WorkButton>
            </BannerContainer>
          </Banner>
        </DescriptionContainer>
        <Footer>
          <FooterContainer>
            <FooterHeader>
              <Logo />
              <Navbar>
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
                <li>
                  <img src={twitter} alt="twitter" />
                </li>
                <li>
                  <img src={pinterest} alt="pinterest" />
                </li>
                <li>
                  <img src={instagram} alt="instagram" />
                </li>
              </Navbar>
            </FooterHeader>
            <FooterLine />
            <LastInfo>
              <Company>
                
                  <li>OUR COMPANY</li>
                  <li>HOW WE WORK</li>
                  <li>WHY INSURE?</li>
                  <li>VIEW PLANS</li>
                  <li>REVIEWS</li>
                
              </Company>
              <Help>
              
                  <li>HELP ME</li>
                  <li>FAQ</li>
                  <li>TERMS OF USE</li>
                  <li>PRIVACY POLICY</li>
                  <li>COOKIES</li>
                
              </Help>
              <Contact>
                
                  <li>CONTACT</li>
                  <li>SALES</li>
                  <li>SUPPORT</li>
                  <li>LIVE CHAT</li>
                
              </Contact>
              <Others>
                
                  <li>OTHERS</li>
                  <li>CAREERS</li>
                  <li>PRESS</li>
                  <li>LICENSES</li>
                
              </Others>
            </LastInfo>
          </FooterContainer>
        </Footer>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
