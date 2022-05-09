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
    z-index: 9999;
    a{
        text-decoration: none;
        color: #f0f3f5;
        font-size: 20px;
        transition: all 0.3s;
    }
    a:hover{
        color: #8492A7;
        background-color: #336BC5;
    }
    .menu_drop:hover{
        font-size: 28px;
    }
`;

export default ItemsContainer;