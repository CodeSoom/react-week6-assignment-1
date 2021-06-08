import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './layout/Header';
import RestaurantDetailPage from './pages/RestaurantPage';

// 1. Header, HomePage, AboutPage, RestaurantsPage 생성 X
// 2. Header, HomePage, AboutPage, RestaurantsPage 라우팅 적용 X
// 3. RestaurantDetailPage 생성
// 4. RestaurantDetailPage 라우팅 적용

export default function App() {
  const path = window.location.pathname.split('/').length > 2 ? 'restaurant' : window.location.pathname;

  const MyComponent = {
    '/': HomePage,
    '/about': AboutPage,
    '/restaurants': RestaurantsPage,
    restaurant: RestaurantDetailPage,
  }[path] || NotFoundPage;

  return (
    <div>
      <Header />
      <MyComponent />
    </div>
  );
}
