import { Routes, Route, Link } from 'react-router-dom';

import About from './About';
import Homepage from './Homepage';
import RestaurantPage from './RestaurantPage';
import NotFound from './NotFound';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </header>

      {/* 실제컨텐츠만 swtich로 */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
