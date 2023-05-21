import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getUsers } from 'redux/users/operations';
import {
  selectCurrentPage,
  selectError,
  selectUsers,
} from 'redux/users/selectors';
import { setPage } from 'redux/users/slice';

import { toast } from 'react-toastify';
import BackBtn from 'components/backButton/BackBtn';
import UsersList from '../components/usersList/UsersList';

import { Button } from 'styles/Button.styled';

const TweetsPage = () => {
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
      
      {users.length > 0 && <UsersList currentPageData={currentPageData} />}

      {currentPage < totalPages && (
        <Button type="button" className="baseBtn" onClick={handleLoadMore}>
          load more
        </Button>
      )}
    </>
  );
};

export default TweetsPage;
