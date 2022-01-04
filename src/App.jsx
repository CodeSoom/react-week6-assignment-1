import {
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';

export default function App() {
  return (
    <>
      <h1>헤더</h1>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}
