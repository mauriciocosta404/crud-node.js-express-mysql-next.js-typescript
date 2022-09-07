import styled from "styled-components";

export const AppContainer=styled.div`
    background-color: #fff;
    position: absolute;
    top: 50%;left:50%;
    transform: translate(-50%,-50%);
    >div{
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
    *{
        margin: .3rem;
        padding:.5rem 1rem;
    }
    button{
        background-color: blueviolet;
        border: none;
        color: #fff;
    }
`;