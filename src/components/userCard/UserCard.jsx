import React from 'react';
import PropTypes from 'prop-types';
import {
    Avatar,
    Button,
    CardBox,
    MainImage,
    UserInfo,
    UserName,
  } from './UserCard.styled';
import picture from '../images/picture.svg';
import { ReactComponent as Logo } from '../images/goit-logo.svg';



const UserCard = ({ avatar, user, followers, tweets, following }) => {
//   console.log('avatar :>> ', avatar);
//   console.log('followers :>> ', followers);
//   console.log('user :>> ', user);
//   console.log('tweets :>> ', tweets);

  return (
    <CardBox>
      <Logo width={76} height={22} />
      <MainImage src={picture} alt="main-img" />

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
        // onClick={e => handleClick(e)}
        following={following}
        name={user}
      >
        {following ? 'Following' : 'Follow'}
      </Button>
      <UserName>{user}</UserName>
    </CardBox>
  )
};

UserCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  tweets: PropTypes.number.isRequired,
};

export default UserCard;
