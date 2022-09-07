import styled from "styled-components";

export const Container = styled.div`
    position:absolute ;
     top:0;bottom:0;right:0;left:0;
     z-index: 1;
     background-color: rgba(0,0,0,0.4);
     .close{
        cursor: pointer;
        position: absolute;
        color: #fff;
        top: 3rem;
        right: 6rem;
        font-size: 2.6rem;
     }
`;

export const AppContainer = styled.div`
    width: 16rem;
    background-color: #fff;
    position: relative;
    top: 50%;left:50%;
    transform: translate(-50%,-50%);
    
    box-shadow: 0 .5rem 1.5rem rgba(0,0,0,0.3);
    >div{
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
    *{
        margin: .3rem;
        padding:.5rem 1rem;
    }
    a{
        background-color: blueviolet;
        border: none;
        color: #fff;
        text-align: center;
    }
`;