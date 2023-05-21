import React from 'react';
import { Container } from 'layout/layout/Layout.styled';

export const Footer = () => {
  return (
    <footer>
      <Container>
        <p>
          © {new Date().getFullYear()} <span>Tweets App.</span>, Inc. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
};