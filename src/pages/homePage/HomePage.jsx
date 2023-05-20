// import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Hero, MainPage } from './HomePage.styled';

const HomePage = () => {
    const location = useLocation();

  return (
    <MainPage>
      <p>Welcome to </p>
      <Hero>

      </Hero>
      <Link to="tweets" state={{ from: location }}>Tweets</Link>

    </MainPage>
  )
}

export default HomePage
