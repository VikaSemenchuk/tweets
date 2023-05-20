import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBackBtn = styled(Link)`
  display: block;

  width: 90px;
  padding: 8px 16px;
  margin: 15px 0;

  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  text-transform: uppercase;
  color: #07893f;
  &:hover,
  :focus {
    background-color: #b6f6b6;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
