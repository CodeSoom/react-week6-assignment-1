import {
  Routes,
  Route,
} from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}
