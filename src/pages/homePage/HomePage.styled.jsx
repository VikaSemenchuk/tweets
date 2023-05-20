import { styled } from 'styled-components';
import picture2 from '../../components/images/picture2x.png';

export const MainPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);  //!!!!!!!!!!!!
  color: white;
  /* content: ''; */
`;

export const Hero = styled.div`
  background-image: url(${picture2});
  background-repeat: no-repeat;
  background-position: center;
  /* background-size: cover; */
  text-align: center;
  
  width: 100%;
  height: 400px;
  /* object-fit: fill; */
`;
