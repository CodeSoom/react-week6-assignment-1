import { useSelector } from 'react-redux';

export default function RestaurantDetailPage() {
  const { selectedRestaurant } = useSelector((state) => ({
    selectedRestaurant: state.selectedRestaurant,
  }));

  return (
    <div>
      <h2>마법사주방</h2>
    </div>
  );
}
