// import React from 'react'
import { StyledLinkBtn } from 'components/backButton/BackLink.styled';
import { useLocation } from 'react-router-dom';
import { Hero, MainPage } from './HomePage.styled';

const HomePage = () => {
  const location = useLocation();

  return (
    <MainPage>
      {/* <p>Welcome to </p> */}
        <p>
          Welcome to the <span>Tweets App</span>
        </p>
      <Hero>
        <StyledLinkBtn to="tweets" state={{ from: location }}>
          Tweets
        </StyledLinkBtn>
      </Hero>
    </MainPage>
  );
};

export default HomePage;
