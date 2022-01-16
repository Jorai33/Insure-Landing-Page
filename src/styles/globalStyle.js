import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *, *::after, *::before {
     box-sizing: border-box;
     margin: 0; 
     padding: 0;
 }

 body{
     font-size: 16px;
     overflow-x: hidden;
 }

 h1 {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
    font-size: 4.5rem;
    line-height: 4rem;
    letter-spacing: -1px;
    color: #FFFFFF;

    @media only screen and (max-width: 25rem) {
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: -0.67px;

    margin-top: 5.8rem;
  }
 }

 h2 {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
    font-size: 1.75rem;
    line-height: 2.375rem;
    letter-spacing: -1px;
 }

 h3 {
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 3.5rem;
    letter-spacing: -0.777778px;


    @media screen {
        font-size: 2.5rem;
        line-height: 2.5rem;
        letter-spacing: -0.56px;
    }

 }

 p {
     font-family: "Karla", sans-serif;
     font-weight: 400;
     line-height: 1.6rem;
     color: #FFFFFF;
 }

 li{
     list-style: none;
     font-family: "Karla", sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 1rem;
    letter-spacing: 1.5px;
    color: #837d88;
    text-transform: uppercase;
 }

 a{
     text-decoration: none;
     
 }

 img{
     max-width: 100%;
 }

`;

export default GlobalStyle;