// import React from 'react'
import { useLocation } from 'react-router-dom';

import { StyledLinkBtn } from 'styles/Link.styled';
import { Hero, MainPage } from './HomePage.styled';

const HomePage = () => {
  const location = useLocation();

  return (
    <MainPage>
      <h1>
        Welcome to the <span>Tweets App</span>
      </h1>
      <Hero>
        <StyledLinkBtn
          className="baseBtn"
          to="tweets"
          state={{ from: location }}
        >
          Tweets
        </StyledLinkBtn>
      </Hero>
    </MainPage>
  );
};

export default HomePage;
