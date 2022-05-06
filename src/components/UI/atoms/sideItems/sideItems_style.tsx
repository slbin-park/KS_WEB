import styled from "styled-components";

export const Profile = styled.img`
    display: flex;
    width: 180px;   height: 180px;
    margin-top: 40px;
    border-radius: 100%;
    cursor: pointer;
    flex-wrap: wrap;
`;

export const Items = styled.div`
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

export const UserName = styled.div`
    display: ${(props) => (props ? "flex" : "none")};
    margin-top: 10px;
    font-size: 24px;
    flex-direction: column;  
`;