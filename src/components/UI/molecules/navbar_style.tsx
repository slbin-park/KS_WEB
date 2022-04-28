import styled from "styled-components";
import { StateType } from './navbarType';

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

export const Profile = styled.img< { click: boolean } >`
    display: ${(props) => (props ? "flex" : "none")};
    width: 180px;   height: 180px;
    margin-top: 40px;
    border-radius: 100%;
    cursor: pointer;
    flex-wrap: wrap;
`;

export const NavItemBox = styled.div< { click: boolean } >`
    display: ${(props) => (props.click ? "flex" : "none")};
    width: 250px; height: 100%;
    background-color: coral;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;    top: 60px;
    cursor: pointer;
    .UserName {
        display: ${(props) => (props ? "flex" : "none")};
        margin-top: 10px;
        font-size: 24px;
        flex-direction: column;
    }
`;

export const NavItem = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: 100px;
    flex-direction: column;
    text-decoration: none;
    width: 250px;
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

export const NavDropDown = styled.div`
    
`;