import styled from "styled-components";

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
    .Hamberger {
        position: relative;
        font-size: 30px;    color: white;
        padding: 5px;
        width: 40px;    left: 10px;
        cursor: pointer;
    }
    .Logo {
        justify-content: center;
        position: relative;
        font-size: 24px;
        cursor: pointer;
    }
    .Register {
        cursor: pointer;
        position: relative;
        right: 10px;
    }
`;