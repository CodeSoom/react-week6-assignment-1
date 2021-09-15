import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import {
  Switch, Route, Link, useParams,
} from 'react-router-dom';

import { fetchRestaurant } from './services/api';

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

async function loadRestaurant({ setState, restaurantId }) {
  const restaurant = await fetchRestaurant({ restaurantId });

  setState({
    restaurant,
  });
}

function RestaurantPage() {
  const [state, setState] = useState({
    restaurant: null,
  });

  const { restaurantId } = useParams();

  useEffect(() => {
    if (restaurantId) {
      loadRestaurant({ setState, restaurantId });
    }
  }, [restaurantId]);

  if (state.restaurant === null) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  const { name, address, menuItems } = state.restaurant;

  return (
    <div>
      restaurantId:
      {restaurantId}
      <h1>{name}</h1>
      <address>{address}</address>
      <h2>메뉴</h2>
      <ul>
        {
          menuItems.map((menu) => (
            <li key={menu.id}>
              {menu.name}
            </li>
          ))
        }
      </ul>
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
      <Link to="/">
        <h1>헤더</h1>
      </Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurant/:restaurantId" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
