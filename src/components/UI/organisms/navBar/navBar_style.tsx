import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
    from{ 
        width: 0px;
        opacity: 0.5;
     }
    to{ 
        width: 270px;
        opacity: 1;
    }
`;

export const Sidebar = styled.div< { click: boolean } >`
    ${(props) => {
        return `
            display: ${(props.click) ? "flex" : "none"};
        `
    }}
    width: 270px; height: 100%;
    background-color: #6A86B3;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;    top: 60px;
    animation: ${slideAnimation} 0.5s;
    cursor: pointer;
`;

export const HambergerIcon = styled.div`
    position: fixed;
    font-size: 30px;    color: white;
    padding: 5px;
    width: 40px;    left: 15px; top: 5px;
    z-index: 9999;
    cursor: pointer;
`;