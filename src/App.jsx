import { Routes, Route, Link } from 'react-router-dom';

import About from './About';
import Homepage from './Homepage';
import RestaurantPage from './RestaurantPage';
import RestaurantDetailsContainer from './RestaurantDetailsContainer';
import NotFound from './NotFound';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetailsContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
