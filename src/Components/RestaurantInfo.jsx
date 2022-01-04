import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadRestaurantInfo } from '../actions';

export default function RestaurantInfo() {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantInfo(restaurantId));
  }, [restaurantId]);

  const {
    restaurantName, address, menuItems, reviews,
  } = useSelector((state) => ({
    restaurantName: state.restaurantInfo.name,
    address: state.restaurantInfo.address,
    menuItems: state.restaurantInfo.menuItems,
    reviews: state.restaurantInfo.reviews,
  }));

  return (
    <>
      <h1>{restaurantName}</h1>
      <div>
        주소:
        {address}
      </div>
      <h2>
        메뉴
      </h2>
      <ul>
        {menuItems && menuItems.map(({ id, name }) => (
          <li
            key={id}
          >
            {name}
          </li>
        ))}
      </ul>

      <h2>
        리뷰
      </h2>
      <ul>
        {reviews && reviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <h3>{name}</h3>
            <h4>
              score :
              {score}
            </h4>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
