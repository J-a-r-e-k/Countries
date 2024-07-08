import './App.scss';
import Header from './Components/Header/Header';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';

import { Routes, Route, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
      share across all the pages on your site, like navigation. */}
      <Header />

      {/* An <Outlet> renders whatever child route is currently active,
      so you can think about this <Outlet> as a placeholder for
      the child routes we defined above. */}
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path=":country" element={<CountryPage />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<>No page</>} />
      </Route>
    </Routes>
  );
}

export default App;
