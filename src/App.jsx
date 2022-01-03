import RestaurantsPage from './RestaurantsPage';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/restaurants">Restaurants</a></li>
      </ul>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>About 페이지입니다.</p>
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <p>Not Found Page :P</p>
    </>
  );
}

export default function App() {
  const { location: { pathname } } = window;

  const MyComponent = {
    '/': HomePage,
    '/about': AboutPage,
    '/restaurants': RestaurantsPage,
  }[pathname] || NotFoundPage;

  return (
    <MyComponent />
  );
}
