import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainerEl } from '../../components/toast/ToastContainer';
import Loader from '../../components/loader/Loader';
import { Footer } from 'layout/footer/Footer';

import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <ToastContainerEl />
      <Suspense fallback={<Loader />}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
