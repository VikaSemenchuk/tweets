import styled, { keyframes } from 'styled-components';
import picture from '../images/picture2.png';

const fadeIn = keyframes`
from { 
    opacity: 0; 
    transform: translateY(40px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }`;

export const CardBox = styled.li`
  position: relative;
  width: 380px;
  padding: 28px 0 36px;

  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
  background:
    url(${picture}) 36px 28px no-repeat,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  animation: ${fadeIn} 0.3s ease;

  & > svg {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 26px;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;

    display: block;
    width: 100%;
    height: 8px;

    background-color: #ebd8ff;
    box-shadow:
      0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  & > div {
    position: relative;
    z-index: 1;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;

    margin: 0 auto;

    border-radius: 50%;
    border: 8px solid #ebd8ff;
    box-shadow:
      0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    & > img {
      width: 65px;
      height: 65px;
    }
  }
`;

export const UserInfo = styled.div`
  margin: 0 auto 26px;
  & > p {
    margin-top: 0;
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
