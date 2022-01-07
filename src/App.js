import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import styled from "styled-components";

import Logo from "./ImageComponents/Logo";
import coverImage from "../src/images/image-intro-desktop.jpg";
// import { IntroPattern } from "./styles/Shapes";
import introPattern from "../src/images/bg-pattern-intro-right-desktop.svg";

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

const HeaderContainer = styled.div`
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
  gap: 1.5rem;

  li {
    font-family: "Karla", sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 1.5px;
    color: #837d88;
    text-transform: uppercase;
  }

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

const CoverContainer = styled.div`
  width: 70vw;
  margin: auto;

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

const Pattern = styled.div`
  position: absolute;  
  left: 68rem;
  width: 43.5rem;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <HeaderContainer>
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
        </HeaderContainer>
        <Cover>
          <Pattern>
            <img src={introPattern} alt="pattern" />
          </Pattern>

          <CoverContainer>
            <Content>
              <Line />
              <Title>Humanizing <br /> your insurance.</Title>
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
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
