import { useSelector } from 'react-redux';

export default function RestaurantDetailPage() {
  const { restaurantDetails } = useSelector((state) => ({
    restaurantDetails: state.restaurantDetails,
  }));

  return (
    <div>
      <h2>마법사주방</h2>
    </div>
  );
}
