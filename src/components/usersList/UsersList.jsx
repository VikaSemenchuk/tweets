// import React from 'react'
import UserCard from 'components/userCard/UserCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// import { setUsers } from 'redux/slice';
// import { APIUsers } from 'services/tweetsApi';
import BackBtn from '../backButton/BackBtn';
import { StyledUsersList } from './UsersList.styled';
import { selectError, selectUsers } from '../../redux/selectors';
import { getUsers } from 'redux/operations';


const UsersList = () => {
  // const [users, setUsers] = useState([]);
  const users = useSelector(selectUsers);
  const error = useSelector(selectError);
  // console.log('users :>> ', users);

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error('Sorry, something went wrong');
    }
  }, [error]);
  return (
    <>
      <BackBtn />
      <StyledUsersList>
        {users.map(({id, ...user}) => {
          return <UserCard key={id} id={id} info={user} />;
        })}
      </StyledUsersList>
    </>
  );
};

export default UsersList;
