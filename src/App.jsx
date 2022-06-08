import { Routes, Route, Link } from 'react-router-dom';

import Restaurants from './pages/Restaurants';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>헤더 영역</h1>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
