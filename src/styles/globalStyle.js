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
 }

 p {
     font-family: "Karla", sans-serif;
 }

 li{
     list-style: none;
 }

 a{
     text-decoration: none;
 }

`;

export default GlobalStyle;