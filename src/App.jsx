import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';
import NotfoundPage from './NotfoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route element={<NotfoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
