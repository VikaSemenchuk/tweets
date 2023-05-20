// import React from 'react'
// import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledBackBtn } from './BackBtn.styled'

const BackBtn = () => {
    const location = useLocation()
  return (
    <StyledBackBtn to={location.state?.from ?? '/'}>
      Back
    </StyledBackBtn>
  )
}

export default BackBtn
