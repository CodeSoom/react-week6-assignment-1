import { Link, Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <div>
      <header>
        <h1><Link to="/">헤더</Link></h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
