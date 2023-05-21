// import React from 'react'
import UserCard from 'components/userCard/UserCard';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import BackBtn from '../backButton/BackBtn';
import { StyledUsersList } from './UsersList.styled';
import {
  selectCurrentPage,
  selectError,
  selectUsers,
} from '../../redux/selectors';
import { getUsers } from 'redux/operations';
import { Button } from 'styles/Button.styled';
import { setPage } from 'redux/slice';

const UsersList = () => {
  const users = useSelector(selectUsers);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);

  const dispatch = useDispatch();

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = users.slice(0, endIndex);


  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };

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
        {currentPageData.map(({ id, ...user }) => 
           <UserCard key={id} id={id} info={user} />
        )}
      </StyledUsersList>
      {currentPage < totalPages && (
        <Button type="button" className="baseBtn" onClick={handleLoadMore}>
          load more
        </Button>
      )}
    </>
  );
};

export default UsersList;
