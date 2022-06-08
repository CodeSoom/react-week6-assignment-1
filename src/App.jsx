import { Link } from 'react-router-dom';

import Router from './Router';

export default function App() {
  return (
    <>
      <header>
        <Link to="/">
          <h1>헤더 영역</h1>
        </Link>
      </header>
      <Router />
    </>
  );
}
