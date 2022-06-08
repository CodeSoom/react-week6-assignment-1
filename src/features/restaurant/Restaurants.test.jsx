import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const restaurants = [
    { id: 1, name: '마법사주방' },
  ];

  const { container } = render((
    <Restaurants restaurants={restaurants} />
  ));

  expect(container).toHaveTextContent('마법사주방');
});
