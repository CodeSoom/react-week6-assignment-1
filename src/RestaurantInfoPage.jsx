import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRestaurantInfo, selectRestaurant } from './actions';

export default function RestaurantInfoPage({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectRestaurant(Number(match.params.id)));
    dispatch(loadRestaurantInfo());
  }, []);

  return (
    <>
      <h2>양천주가</h2>
      <h3>메뉴</h3>
      <ul>
        <li>비빔밥</li>
      </ul>
    </>
  );
}
