import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *, *::after, *::before {
     box-sizing: border-box;
     margin: 0; 
     padding: 0;
 }

 body{
     font-size: 16px;
 }

 h1 {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
    font-size: 4.5rem;
    line-height: 4rem;
    letter-spacing: -1px;
    color: #FFFFFF;
 }

 p {
     font-family: "Karla", sans-serif;
     font-weight: 400;
     line-height: 1.6rem;
     color: #FFFFFF;
 }

 li{
     list-style: none;
 }

 a{
     text-decoration: none;
     
 }

`;

export default GlobalStyle;