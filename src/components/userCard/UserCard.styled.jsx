import styled from 'styled-components';
import picture from '../images/picture2.png';

export const CardBox = styled.li`
  /* box-sizing: border-box; */
  width: 380px;
  padding: 28px 0 36px;
  color: #ebd8ff;
  text-transform: uppercase;

  position: relative;
  background: url(${picture}) 36px 28px no-repeat,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  text-align: center;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  & > svg {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 26px;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 8px;
    position: absolute;
    top: 50%;
    left: 0;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  & > div {
    width: 80px;
    height: 80px;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    border: 8px solid #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    & > img {
      display: block;
      width: 62px;
      height: 62px;
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


