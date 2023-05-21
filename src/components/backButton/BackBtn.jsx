// import React from 'react'
// import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { StyledLinkBtn } from '../../styles/Link.styled';

const BackBtn = () => {
  const location = useLocation();
  return (
    <StyledLinkBtn className='baseBtn' to={location.state?.from ?? '/'}>
      back
    </StyledLinkBtn>
  );
};

export default BackBtn;
