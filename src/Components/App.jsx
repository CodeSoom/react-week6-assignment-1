import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import RestaurantsPage from './Pages/RestaurantsPage';

export default function App() {
  return (
    <>
      <h1>헤더</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
      </Routes>
    </>
  );
}
