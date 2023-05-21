import '../components/App.css';

import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout/Layout';

const LazyHomePage = lazy(() => import('../pages/homePage/HomePage'));
const LazyTweetsPage = lazy(() => import('../pages/TweetsPage'));
// const LazyNotFoundPage = lazy(() =>
//   import('../pages/notFoundPage/NotFoundPage')
// );

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="tweets" element={<LazyTweetsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
