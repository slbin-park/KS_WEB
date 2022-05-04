import styled from "styled-components";

export const Sidebar = styled.div< { click: boolean } >`
    display: ${(props) => (props.click ? "flex" : "none")};
    width: 270px; height: 100%;
    background-color: coral;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;    top: 60px;
    cursor: pointer;
`;