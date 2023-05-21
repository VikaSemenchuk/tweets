import PropTypes from 'prop-types';
import UserCard from 'components/userCard/UserCard';
import { useSelector } from 'react-redux';

import { selectLoading } from 'redux/users/selectors';

import Loader from 'components/loader/Loader';
import { StyledUsersList } from './UsersList.styled';

const UsersList = ({ currentPageData }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading && <Loader />}

      <StyledUsersList>
        {currentPageData.map(({ id, ...user }) => (
          <UserCard key={id} id={id} info={user} />
        ))}
      </StyledUsersList>
    </>
  );
};

UsersList.propTypes = {
  currentPageData: PropTypes.array.isRequired,
};

export default UsersList;
