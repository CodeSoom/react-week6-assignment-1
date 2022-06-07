import { Link, Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import RestaurantsPage from './components/RestaurantsPage';
import NotFoundPage from './pages/NotFoundPage';

import RestaurantsDetailsContainer from './containers/RestaurantsDetailsContainer';

export default function App() {
  return (
    <>
      <h1><Link to="/">헤더</Link></h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantsDetailsContainer />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
