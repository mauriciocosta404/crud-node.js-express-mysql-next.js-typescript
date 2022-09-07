import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    *{
        margin: 0; padding:0;
        box-sizing: border-box;
        text-decoration: none;
        transition: all .5s linear;
        outline: none;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    body{
        background-color: #eee;
    }
    button{
        cursor: pointer;
    }
`;