// import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const HomePage = () => {
    const location = useLocation();
  return (
    <div>
      Home Page
      <p>Welcome to </p>
      <Link to="tweets" state={{ from: location }}>Tweets</Link>

    </div>
  )
}

export default HomePage
