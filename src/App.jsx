import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function AboutPage() {
  return (
    <>
      <h2>
        About
      </h2>
      <p>About 페이지 입니다</p>
    </>
  );
}

export default function App() {
  return (
    <div>
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
