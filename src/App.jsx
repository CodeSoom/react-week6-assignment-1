import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>헤더</h1>
      <Outlet />
    </div>
  );
}
