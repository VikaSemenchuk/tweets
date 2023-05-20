import React, { Suspense } from 'react';

import Loader from 'components/loader/Loader';
import { Container } from 'layout/layout/Layout.styled';
import { StyledNotFoundPage, StyledLink } from './NotFoundPage.styled';

export default function NotFoundPage () {
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <StyledNotFoundPage>
          This page was not found. You can try to come back to the
          <StyledLink to={'/'}>Home page</StyledLink>
        </StyledNotFoundPage>
      </Container>
    </Suspense>
  );
};