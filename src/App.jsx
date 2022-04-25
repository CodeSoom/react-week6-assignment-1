import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return (
    <p>Home</p>
  );
}

function NotFoundPage() {
  return (
    <p>404 Not Found</p>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
