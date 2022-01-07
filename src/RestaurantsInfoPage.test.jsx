import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsInfoPage from './RestaurantsInfoPage';

describe('RestaurantsInfoPage', () => {
  it('RestaurantsInfoPage가 렌더링된다.', () => {
    const { container } = render((
      <MemoryRouter>
        <RestaurantsInfoPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
