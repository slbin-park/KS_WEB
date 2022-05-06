import styled from "styled-components";

export const SideMenuContainer = styled.div< { click: boolean } >`
    display: ${(props) => (props.click ? "flex" : "none")};
    width: 270px; height: 100%;
    background-color: coral;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;    top: 60px;
    cursor: pointer;
`;

export const NavContainer = styled.div`
    width: 100%;    height: 60px;    
    top: 0px; left: 0px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;   font-size: 18px;
    background-color: tomato;
    position: fixed;
    z-index: 9990;
`;

export const Hamberger = styled.div`
    position: relative;
    font-size: 30px;    color: white;
    padding: 5px;
    width: 40px;    left: 15px;
`;