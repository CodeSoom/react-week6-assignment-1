import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurantsInfo } from './actions';

export default function RestaurantsInfoPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantsInfo(id));
  }, []);

  const { restaurantInfo } = useSelector((state) => ({
    restaurantInfo: state.restaurantInfo,
  }));

  if (!restaurantInfo) {
    return <p>Loading...🎈</p>;
  }

  const { name, address, menuItems } = restaurantInfo;

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
