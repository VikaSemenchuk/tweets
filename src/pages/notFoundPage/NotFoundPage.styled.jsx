import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  padding: 5px 20px;

  text-decoration: none;
  border: solid 1px #0cdf60;
  border-radius: 5px;

  color: #564444;
  background-color: #b6f6b6;

  &:hover,
  &:focus {
    color: #07893f;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const StyledNotFoundPage = styled.h1`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
text-align: center;
  height: 70vh;
  margin-bottom: 40px;

  font-size: 40;
  color: #564444;
`;
