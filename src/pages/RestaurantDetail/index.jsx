import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurant } from '../../store/actions';

const id = 1;

export default function RestaurantDetailPage() {
  const { restaurant } = useSelector(() => ({
    restaurant: {
      id: '1',
      name: '김밥천국',
      address: '서울특별시 강남구 역삼동',
      menu: [{ id: 1, name: '치즈돈까스' }],
    },
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(id));
  }, [id]);

  return (
    <section>
      <h1>{restaurant.name}</h1>
      <h2>상세정보</h2>
      <div>
        <h3>주소</h3>
        <span>{restaurant.address}</span>
      </div>
      <div>
        <h2>메뉴</h2>
        <ul>
          {restaurant.menu.map(({ id, name }) => (
            <li key={id}>
              <article>
                <h3>{name}</h3>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
