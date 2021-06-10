import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// import {
// fetchRestaurantInformation,
// } from './services/api';

import {
  useParams,
} from 'react-router-dom';

import {
  loadRestaurantInformation,
} from './actions';

import { get } from './utils';

export default function RestaurantDetailPage() {
  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    dispatch(loadRestaurantInformation(id));
  }, []);

  const restaurantDetail = useSelector(get('restaurantDetail'));
  // const [state, setState] = useState({
  // id: -1,
  // categoryId: -1,
  // name: '',
  // address: '',
  // menuItems: [],
  // reviews: [],
  // information: '',
  // });

  // useEffect(async () => {
  // const resultInformation = await fetchRestaurantInformation(props.match.params.id);
  // setState(resultInformation);
  // }, []);

  return (restaurantDetail === null
    ? <div>404 Not Found</div>
    : (
      <div>
        <h1>{restaurantDetail.name}</h1>
        <p>
          주소:
          {' '}
          {restaurantDetail.address}
        </p>
        <h2>메뉴</h2>
        <ul>
          {restaurantDetail.menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              {menuItem.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
