import { Routes, Route } from 'react-router-dom';

import NotFound from './page/NotFound';
import Restaurants from './page/Restaurants';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/restaurant" element={Restaurants} />
        <Route element={NotFound} />
      </Routes>
    </div>
  );
}
