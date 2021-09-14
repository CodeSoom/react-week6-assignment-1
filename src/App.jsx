import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

function HomePage() {
  return (
    <div>
      <h1>HOME</h1>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
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
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
