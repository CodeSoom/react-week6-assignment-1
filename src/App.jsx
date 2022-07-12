import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  );
}
