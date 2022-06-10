import { useSelector } from 'react-redux';
import { get } from './utils';

export default function RestuarantDetailsContainer() {
  const details = useSelector(get('restaurantDetails'));

  return (
    <div>
      <h2>{details?.name}</h2>
      <p>
        주소:
        {' '}
        {details?.address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {details?.menuItems.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </div>
  );
}
