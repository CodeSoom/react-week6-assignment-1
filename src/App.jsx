import { Routes, Route, Link } from 'react-router-dom';

import NotFound from './page/NotFound';
import Restaurants from './page/Restaurants';
import RestaurantDetail from './page/RestaurantDetail';
import About from './page/About';
import Home from './page/Home';

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">헤더</Link>
      </h1>
      <Routes>
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
