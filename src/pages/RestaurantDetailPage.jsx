import { useSelector } from 'react-redux';

export default function RestaurantDetailPage() {
  const { restaurantDetails } = useSelector((state) => ({
    restaurantDetails: state.restaurantDetails,
  }));

  return (
    <div>
      <h2>마법사주방</h2>
      <p>주소: 서울 강남구 123456</p>
      <h3>메뉴</h3>
      <ul>
        <li>비빔밥</li>
      </ul>
    </div>
  );
}
