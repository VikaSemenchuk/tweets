import PropTypes from 'prop-types';
import UserCard from 'components/userCard/UserCard';

import { StyledUsersList } from './UsersList.styled';

const UsersList = ({ currentPageData }) => {
  return (
    <>
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
