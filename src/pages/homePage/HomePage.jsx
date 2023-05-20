// import React from 'react'
import { StyledLinkBtn } from 'components/backButton/BackLink.styled';
import { useLocation } from 'react-router-dom';
import { Hero, MainPage } from './HomePage.styled';

const HomePage = () => {
  const location = useLocation();

  return (
    <MainPage>
      <p>Welcome to </p>
      <Hero></Hero>
      <StyledLinkBtn to="tweets" state={{ from: location }}>
        Tweets
      </StyledLinkBtn>
    </MainPage>
  );
};

export default HomePage;
