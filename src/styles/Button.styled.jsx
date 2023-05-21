import { styled } from "styled-components";

export const Button = styled.button`
  width: 196px;
  height: 50px;
  margin: 0 auto;
  background-color: ${e => (e.following === 'true' ? '#5CD3A8' : '#ebd8ff')};
 
`;