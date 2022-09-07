import styled from "styled-components";

export const TableContainer=styled.div`
    position: absolute;
    margin-top: 21rem;
    left:50%;
    transform: translate(-50%,-50%);

    table{
        border-collapse: collapse;
        background-color:#fff ;
    }
    tr:nth-child(even){
        background-color: #ddd;
    }
    th{
        background-color:  blueviolet;
        color: #fff;
    }
    th,td{
        padding: .5rem 3rem;
        text-align: center;
    }
    .buttons{
        display: flex;
        outline: none;
    }
    .edit{
        background-color:blueviolet;
        color: #fff;
        padding: .3rem;
        margin: .5rem;
        border:none;
    }
    
    .delet{
        background-color: tomato;
        color: #fff;
        padding: .3rem;
        margin: .5rem;
          border: none;
    }
`;