import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';

export default function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}
