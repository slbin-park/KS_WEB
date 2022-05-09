import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    from{ width: 0px; }
    to{ width: 180px; }
`;

export const ProfileImg = styled.img`
    display: flex;
    width: 180px;   height: 180px;
    margin-top: 40px;
    border-radius: 100%;
    cursor: pointer;
    flex-wrap: wrap;
    animation: ${Animation} 0.5s;
`;

export default ProfileImg;