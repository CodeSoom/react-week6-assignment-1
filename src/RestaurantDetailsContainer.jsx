import { useSelector } from 'react-redux';

export default function RestaurantDetailsContainer() {
  // TODO: 해당 state 충족하도록 action, reducer 수정
  const restaurantDetails = useSelector((state) => state.restaurantDetails);

  if (!restaurantDetails) {
    return (
      <h2>Loading...</h2>
    );
  }

  return (
    <div>
      레스토랑 세부사항들
    </div>
  );
}
