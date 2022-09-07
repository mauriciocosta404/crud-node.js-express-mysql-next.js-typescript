import styled from 'styled-components';

export const NavContainer=styled.nav`
    position: fixed;
    top: 0; left: 0; right: 0;
    background: #fff;
    padding: 1rem 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    box-shadow: var(--box-shadow);
    
    ul{
        list-style-type: none;
        display: flex;
    }
    li a{
        padding: .3rem;
        margin: .3rem;
        color: #fff;
    }
    ul a.active,
    ul a{
        background-color: blueviolet;
    }
`;