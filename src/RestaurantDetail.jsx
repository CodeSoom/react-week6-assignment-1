import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurantDetail } from './actions';

export default function RestaurantDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, []);

  const { restaurantDetail } = useSelector((state) => ({
    restaurantDetail: state.restaurantDetail,
  }));

  if (!restaurantDetail) {
    return <p>Loading...</p>;
  }

  const { name, address, menuItems } = restaurantDetail;

  return (
    <div>
      <h2>{name}</h2>
      <p>{address}</p>
      <ul>
        {
          menuItems?.map((item) => (<li key={item.id}>{item.name}</li>))
        }
      </ul>
    </div>
  );
}
