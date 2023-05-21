import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from 'redux/users/operations';

import { selectLoading } from 'redux/users/selectors';

import { ReactComponent as Logo } from '../images/goit-logo.svg';
import { Avatar, CardBox, UserInfo } from './UserCard.styled';
import { Button } from 'styles/Button.styled';
import Loader from 'components/loader/Loader';

const UserCard = ({ id, info }) => {
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const onClick = e => {
    if (e.target.id === id) {
      if (info.following) {
        info.following = false;
        info.followers -= 1;
      } else {
        info.following = true;
        info.followers += 1;
      }
      dispatch(updateUser({ ...info, id }));
    }
  };

  const { avatar, tweets, followers, following } = info;

  return (
    <>
      {isLoading && <Loader />}
      <CardBox>
        <Logo width={76} height={22} />

        <Avatar>
          <div>
            <img src={avatar} alt="user-avatar" />
          </div>
        </Avatar>

        <UserInfo>
          <p>
            <span>{tweets}</span> Tweets
          </p>

          <p>
            <span>{new Intl.NumberFormat('en-US').format(followers)} </span>
            Followers
          </p>
        </UserInfo>

        <Button
          type="button"
          className="baseBtn"
          onClick={onClick}
          id={id}
          following={following ? 'true' : 'false'}
        >
          {following ? 'Following' : 'Follow'}
        </Button>
      </CardBox>
    </>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
};

export default UserCard;
