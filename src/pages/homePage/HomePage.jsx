import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectLoading } from 'redux/users/selectors';

import Loader from 'components/loader/Loader';
import { StyledLinkBtn } from 'styles/Link.styled';
import { Hero, MainPage } from './HomePage.styled';

const HomePage = () => {
  const location = useLocation();
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading && <Loader />}

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
    </>
  );
};

export default HomePage;
