import { Route, Switch } from 'react-router';

import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import NotFoundPage from './pages/NotFoundPage';
import RestaurantPage from './pages/RestaurantPage';
import Header from './layout/Header';

// 1. Header, HomePage, AboutPage, RestaurantsPage 생성 X
// 2. Header, HomePage, AboutPage, RestaurantsPage 라우팅 적용 X
// 3. RestaurantDetailPage 생성
// 4. RestaurantDetailPage 라우팅 적용

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
