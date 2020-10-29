import React from 'react';

import { useSelector } from 'react-redux';

import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

import { get } from './utils';

import Restaurants from './Restaurants';
import RestaurantDetail from './RestaurantDetail';

export default function RestaurantsContainer() {
  // For Test: to render RestaurantDetail component
  const restaurant = {
    id: 1,
    name: '양천주가',
    address: '서울 강남구',
    menuItems: [
      { id: 1, name: '비빔밥' },
      { id: 2, name: '짬뽕' },
    ],
  };

  const restaurants = useSelector(get('restaurants'));

  const { path } = useRouteMatch();

  const handleClickRestaurant = () => {
  };

  return (
    <Switch>
      <Route
        exact
        path={path}
        render={() => (
          <Restaurants
            restaurants={restaurants}
            onClickRestaurant={handleClickRestaurant}
          />
        )}
      />
      <Route
        path={`${path}/:id`}
        render={() => (
          <RestaurantDetail restaurant={restaurant} />
        )}
      />
    </Switch>
  );
}
