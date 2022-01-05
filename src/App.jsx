import { Routes, Route } from 'react-router-dom';

import NotFound from './page/NotFound';
import Restaurants from './page/Restaurants';
import About from './page/About';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/restaurant" element={<Restaurants />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
