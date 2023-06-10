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

  return (
    <div>
      <div>{restaurantDetail.name}</div>
      <div>{restaurantDetail.information}</div>

      <div>
        <ol>
          {restaurantDetail.menuItems?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      </div>

      <div>
        <ul>
          {restaurantDetail.reviews?.map((item) => (
            <li key={item.id}>{`${item.name} - ${item.description}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
