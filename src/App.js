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
  justify-content: space-around;
  gap: 0.5rem;
  

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
            <li>
              View Plans
            </li>
          </Navbar>
        </Header>
      </Container>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
