import { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { get } from './utils';

import { loadRestaurantsDetails } from './actions';

export default function RestaurantPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantsDetails(id));
  }, [id]);

  const restaurantsDetails = useSelector(get('restaurantDetails'));

  console.log('restaurantsDetails', restaurantsDetails);

  const { name, address, menuItems, reviews } = restaurantsDetails;

  return (
    <div>
      <h2>{name}</h2>

      <dl>
        <dt>주소</dt>
        <dd>{address}</dd>
      </dl>
      <dl>
        <dt>메뉴</dt>
        {menuItems && menuItems.map((menu) => (
          <dd key={menu.id}>{menu.name}</dd>
        ))}
      </dl>
      <dl>
        <dt>식당 후기</dt>
        {
          reviews && reviews.map((review) => (
            <dd key={review.id}>{review.description}</dd>
          ))
        }
      </dl>
      <button
        type="button"
        onClick={() => {
          navigate('/restaurant');
        }}
      >
        목록으로
      </button>
    </div>
  );
}
