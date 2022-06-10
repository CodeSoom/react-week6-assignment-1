import { useSelector } from 'react-redux';
import { get } from './utils';

export default function RestuarantDetailsContainer() {
  const details = useSelector(get('restaurantDetails'));
  const { pending, failure } = useSelector(get('status'));

  if (pending) {
    return <div>loading...</div>;
  }

  if (failure) {
    return <div>레스토랑 상세 정보를 가져오지 못했어요</div>;
  }

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
