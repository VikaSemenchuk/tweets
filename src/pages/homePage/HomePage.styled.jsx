import { styled } from 'styled-components';
import picture2 from '../../components/images/picture2x.png';

export const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: calc(100vh - 10vh);
  & h1 {
    font-weight: 600;
    font-size: 58px;
    line-height: 1.22;

    color: #ebd8ff; 
    & span {
      color: #5cd3a8;
    }
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 400px;

  background-image: url(${picture2});
  background-repeat: no-repeat;
  background-position: top;

  text-align: center;
`;
