import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Switch, Route, Link } from 'react-router-dom';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

function HomePage() {
  const routers = [
    { path: '/about', name: 'About' },
    { path: '/restaurants', name: 'Restaurants' },
  ];

  return (
    <div>
      <h1>HOME</h1>
      <ul>
        {
          routers.map(({ path, name }) => (
            <li key={path}>
              <Link to={path}>{name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <div>
        About 페이지 입니다.
      </div>
    </div>
  );
}

function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <h1>Restaurants</h1>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div>
      <h1>Not found</h1>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Link to="/">헤더</Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
