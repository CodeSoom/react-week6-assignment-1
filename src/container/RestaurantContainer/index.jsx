import { useSelector } from 'react-redux';

import { get } from '../../utils';

export default function RestaurantContainer() {
  const { menuItems, information } = useSelector(get('restaurant'));

  return (
    <div>
      <h2>메뉴</h2>
      {menuItems?.length > 0 ? (
        <ul>
          {
            menuItems.map(({ name, id }) => (
              <li key={id}>
                {name}
              </li>
            ))
          }
        </ul>
      ) : (
        <p>
          메뉴를 준비중입니다.
        </p>
      )}
      {
        information ? (
          <p>
            주소:
            {' '}
            {information}
          </p>
        ) : (
          <p>
            주소를 준비중입니다.
          </p>
        )
      }
    </div>
  );
}
