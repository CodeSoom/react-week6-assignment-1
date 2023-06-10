import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurantDetail } from '../redux/actions';
import { get } from '../utils/utils';

export default function RestaurantDetailContainer() {
  const { restaurantid } = useParams();
  const restaurantDetail = useSelector(get('restaurantDetail'));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantDetail({ restaurantid }));
  }, []);

  if (!restaurantDetail) {
    return <p>Loading...</p>;
  }

  const { name, information, menuItems, reviews } = restaurantDetail;

  return (
    <div>
      <div>{name}</div>
      <div>{information}</div>

      <div>
        <ol>
          {menuItems?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      </div>

      <div>
        <ul>
          {reviews?.map((item) => (
            <li key={item.id}>{`${item.name} - ${item.description}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
