import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import styled from "styled-components";

import Logo from "./ImageComponents/Logo";

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
height: 5rem;
background-color: #FFFFFF;

`

const Container = styled.div`
width: 70vw;
margin: auto;
border-bottom: black 3px solid;
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

  li{
    font-family: "Karla", sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 1.5px;
    color: #837D88;
    text-transform: uppercase;
  }

  &>:last-child{
    a{
      color: #2C2830;
      padding: 0.8rem 1.8rem;
      border: 1.5px solid #2C2830;
    }    
    
  }  

`;

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
            <li><a href="#">View Plans</a></li>
          </Navbar>
        </Header>
      </Container>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
