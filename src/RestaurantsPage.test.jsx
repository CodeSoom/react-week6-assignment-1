import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

test('RestaurantsPage', () => {
  const { container } = render((
    <RestaurantsPage />
  ));

 expect(container).toHaveTextContent('서울');
 expect(container).toHaveTextContent('한식');
});