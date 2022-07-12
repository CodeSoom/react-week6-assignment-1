export const ROUTES = ['About', 'Restaurants'];

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>

      <ul>
        {
          ROUTES.map((route) => (
            <li key={route}>{route}</li>
          ))
        }
      </ul>
    </div>
  );
}
