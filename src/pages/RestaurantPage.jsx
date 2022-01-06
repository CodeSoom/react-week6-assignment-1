import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadRestaurant } from '../actions';

export default function RestaurantPage() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(loadRestaurant(params.id));
  }, []);

  return (
    <div>
      <h2>양천주가</h2>
      <p>주소: 서울 강남구</p>
      <h3>메뉴</h3>
      <li>1</li>
      <li>1</li>
    </div>
  );
}
