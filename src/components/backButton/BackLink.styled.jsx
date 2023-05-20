import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLinkBtn = styled(Link)`
  display: block;

  max-width: 100%;
  height: 20px;
  padding: 8px 16px;
  margin: 30px 0;
  text-align: center;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  text-transform: uppercase;
  transition: transform 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  text-decoration: none;
  /* border-radius: 4px;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase; */
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #5CD3A8;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
