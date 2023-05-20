// import React from 'react'
import UserCard from 'components/userCard/UserCard';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { APIUsers } from 'services/tweetsApi';
import BackBtn from '../backButton/BackBtn';
import { StyledUsersList } from './UsersList.styled';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await APIUsers();
        setUsers(users);
        console.log('users :>> ', users);
      } catch (error) {
        toast.error(`Oops, some error occurred... Message: ${error.message}`);
      }
    };
    getUsers();
  }, []);
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
