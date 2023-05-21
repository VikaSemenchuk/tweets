import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  CardBox,
//   MainImage,
  UserInfo,
//   UserName,
} from './UserCard.styled';
// import picture from '../images/picture.svg';
import { ReactComponent as Logo } from '../images/goit-logo.svg';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/operations';
// import { useDispatch } from 'react-redux';

const UserCard = ({ id, info }) => {
    // console.log('info :>> ', info);
    // console.log('id :>> ', id);
    // console.log('following :>> ', following);
  //   console.log('avatar :>> ', avatar);
  //   console.log('followers :>> ', followers);
  //   console.log('user :>> ', user);
  //   console.log('tweets :>> ', tweets);
//   const dispatch = useDispatch();
const dispatch = useDispatch();


//   const [follower, setFollower] = useState(followers);
//   const [onFollowing, setOnFollowing] = useState(following);

const onClick = e => {
    if (e.target.id === id) {
        if (info.following) {
            info.following = false;
            info.followers -= 1;
          } else {
            info.following = true;
            info.followers += 1;
          }
        // following ? followers -= 1 : followers += 1;
        // following === !following;
        // if (onFollowing === true) {
        //     setFollower(prev => prev - 1)
        // } else {
        //     setFollower(prev => prev + 1)
        // }
        dispatch(updateUser({ ...info, id }));
    }
  };
  const { avatar, tweets, followers, following } = info;

  return (
    <CardBox>
      <Logo width={76} height={22} />
      {/* <MainImage src={picture} alt="main-img" /> */}

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

      <Button type="button" className='baseBtn' onClick={onClick} id={id} following={following ? 'true' : 'false'} >
        {following ? 'Following' : 'Follow'}
      </Button>
      {/* <UserName>{user}</UserName> */}
    </CardBox>
  );
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
//   avatar: PropTypes.string.isRequired,
//   user: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   tweets: PropTypes.number.isRequired,
//   following: PropTypes.bool.isRequired,
};

export default UserCard;
