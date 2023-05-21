import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout/Layout';

const LazyHomePage = lazy(() => import('../pages/homePage/HomePage'));
const LazyTweetsPage = lazy(() => import('../pages/TweetsPage'));

function App() {
  return (
    <Routes>ß
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="tweets" element={<LazyTweetsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
