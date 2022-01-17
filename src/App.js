import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import styled from "styled-components";

import Logo from "./ImageComponents/Logo";
import coverImage from "../src/images/image-intro-desktop.jpg";
import snappyProcess from "../src/images/icon-snappy-process.svg";
import prices from "../src/images/icon-affordable-prices.svg";
import peopleFirst from "../src/images/icon-people-first.svg";

// Hover States
import {
  SvgFacebook,
  SvgInstagram,
  SvgPinterest,
  SvgTwitter,
  SvgHamburger,
} from "./styles/Svgs";

import { useState } from "react";



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

  @media only screen and (max-width: 25rem) {
    height: 240rem;
  }
`;

const Container = styled.div`
  width: 70vw;
  margin: auto;

  @media only screen and (max-width: 25rem) {
    width: 87vw;
  }
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

  li {
    &:hover {
      color: #2c2830;
      cursor: pointer;
    }
  }

  & > :last-child {
    a {
      color: #2c2830;
      padding: 0.8rem 1.8rem;
      border: 1.5px solid #2c2830;
      width: 9rem;

      transition: all 1s ease-in-out;

      &:hover {
        background: #2c2830;
        color: #ffffff;
      }
    }
  }

  @media only screen and (max-width: 25rem) {
    display: none;
  }
`;

const Cover = styled.div`
  width: 100vw;
  height: 37.5rem;
  background-color: #2d2641;

  @media only screen and (max-width: 25rem) {
    height: 31rem;
  }

`;

const CoverContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 25rem) {
    grid-template-columns: 1fr;
  }
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
  
  @media only screen and (max-width: 25rem) {
    display: none;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;

  @media only screen and (max-width: 25rem) {
    text-align: center;
  }

`;

const Text = styled.p`
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 25rem) {
    margin-bottom: 2rem;
    text-align: center;
  }

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

  transition: all 1s ease-in-out;

  &:hover {
    background: #ffffff;
    color: #2c2830;
  }

  @media only screen and (max-width: 25rem) {
    margin: auto;
  }

  
`;

const CoverImage = styled.section`
  width: 34rem;
  height: 40rem;
  margin-top: 6.5rem;

  @media only screen and (max-width: 25rem) {
    display: none;
  }
`;

const MobileImage = styled.img`
  width: 100vw;
  height: 28rem;

  @media only screen and (min-width: 25rem) {
    display: none;
  }

  @media only screen and (max-width: 25rem) {
    display: inline-block;
  }
`;

const DescriptionContainer = styled(Container)`
  height: 84rem;

  @media only screen and (max-width: 25rem) {
    display: grid;
    grid-template-columns: 1fr;
    height: 112rem;
  }
`;

const ColoredLine = styled(Line)`
  background: #c396c6;
  margin-top: 19rem;

  @media only screen and (max-width: 25rem) {
    display: inline-block;
    margin-top: 8.75rem;
    margin-left: 6rem;
    margin-bottom: 2.5rem;
  }
`;

const BlackTitle = styled(Title)`
  color: #2c2830;
  margin-bottom: 6rem;

  @media only screen and (max-width: 25rem) {
    margin-top: 0;
    margin-bottom: 5rem;
  }
`;

const Qualities = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media only screen and (max-width: 25rem) {
   display: flex;
   flex-direction: column;
   text-align: center;
   gap: 3.5rem;
    
  }
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

  @media only screen and (max-width: 25rem) {
    height: 21.5rem;
    margin-top: 8.75rem;
    margin-bottom: 8.75rem;
    
  }
`;

const BannerContainer = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 25rem) {
    flex-direction: column;
    
    h3{
      margin-top: 4.5rem;
      text-align: center;
    }
  }
`;

const WorkButton = styled(PlansButton)`
  width: 10.7rem;
`;

const Footer = styled.footer`
  width: 100%;
  height: 30rem;
  background-color: #fafafa;
  padding-top: 4rem;

   @media only screen and (max-width: 25rem) {
   height: 64rem;
    
  } 
`;

const FooterContainer = styled(Container)``;

const FooterHeader = styled(Header)`
  @media only screen and (max-width: 25rem) {
   display: flex;
   flex-direction: column;
  }
`;

const FooterNavbar = styled(Navbar)`
  @media only screen and (max-width: 25rem) {
    margin-top: 2rem;
    display: flex;


  }
`;

const FooterIcon = styled.li``;

const FooterLine = styled(Line)`
  width: 100%;
  background: #dadada;
  margin-top: 2.25rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 25rem) {
    display: inline-block;
    width: 20rem;
    margin: 2.5rem auto;
  }
`;

const LastInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: 25rem) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }
`;

const Company = styled.ul`
  & > :first-child {
    margin-bottom: 2.25rem;
  }

  & > :nth-child(n + 2) {
    color: #2d2641;
    margin-bottom: 1rem;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Help = styled(Company)``;
const Contact = styled(Company)``;
const Others = styled(Company)``;

const StyledHamburger = styled(SvgHamburger)`
  @media only screen and (min-width: 25rem) {
    display: none;
  }
`;

function App() {
  const [facebookHovered, setFbHovered] = useState(false);
  const [twitterHovered, setTwHovered] = useState(false);
  const [pinterestHovered, setPtHovered] = useState(false);
  const [instagramHovered, setIgHovered] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <Container>
          <Header>
            <Logo />
            <StyledHamburger> 
            
            
            </StyledHamburger>
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
        <MobileImage src={coverImage} alt="Walking Family" />
        <Cover>
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
              <FooterNavbar>
                <FooterIcon>
                  <SvgFacebook
                    fill={facebookHovered ? "#2C2830" : "#837D88"}
                    onMouseOver={() => setFbHovered(!facebookHovered)}
                    onMouseOut={() => setFbHovered(!facebookHovered)}
                  />
                </FooterIcon>
                <FooterIcon>
                  <SvgTwitter
                    fill={twitterHovered ? "#2C2830" : "#837D88"}
                    onMouseOver={() => setTwHovered(!twitterHovered)}
                    onMouseOut={() => setTwHovered(!twitterHovered)}
                  />
                </FooterIcon>
                <FooterIcon>
                  <SvgPinterest
                    fill={pinterestHovered ? "#2C2830" : "#837D88"}
                    onMouseOver={() => setPtHovered(!pinterestHovered)}
                    onMouseOut={() => setPtHovered(!pinterestHovered)}
                  />
                </FooterIcon>
                <FooterIcon>
                  <SvgInstagram
                    fill={instagramHovered ? "#2C2830" : "#837D88"}
                    onMouseOver={() => setIgHovered(!instagramHovered)}
                    onMouseOut={() => setIgHovered(!instagramHovered)}
                  />
                </FooterIcon>
              </FooterNavbar>
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
