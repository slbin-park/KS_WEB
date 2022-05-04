import styled from "styled-components";

export const ItemsContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 100px;
    flex-direction: column;
    text-decoration: none;
    width: 270px;
    text-align: center;
    .menu{
        text-decoration: none;
        color: white;
        font-size: 20px;
    }
    .menu:hover{
        color: crimson;
        background-color: tomato;
    }
`;