// import React from 'react'
import UserCard from 'components/userCard/UserCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setUsers } from 'redux/slice';
import { APIUsers } from 'services/tweetsApi';
import BackBtn from '../backButton/BackBtn';
import { StyledUsersList } from './UsersList.styled';
import { selectUsers } from '../../redux/selectors';


const UsersList = () => {
  // const [users, setUsers] = useState([]);
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const getUsers = async () => {
      try {
        const usersAPI = await APIUsers();
        dispatch(setUsers(usersAPI));
        console.log('users :>> ', usersAPI);
        // console.log('users :>> ', users);
      } catch (error) {
        toast.error(`Oops, some error occurred... Message: ${error.message}`);
      }
    };
    getUsers();
  }, [dispatch]);
  APIUsers();
  return (
    <>
      <BackBtn />
      <StyledUsersList>
        {users.map(user => {
          return <UserCard key={user.id} {...user} />;
        })}
      </StyledUsersList>
    </>
  );
};

export default UsersList;
