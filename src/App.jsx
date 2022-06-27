import { Outlet, useNavigate } from 'react-router-dom';

import Header from './components/Header';

export default function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Header onClick={handleClick} />
      <Outlet />
    </>
  );
}
