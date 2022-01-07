import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RestaurantsInfoPage from './RestaurantsInfoPage';

describe('RestaurantsInfoPage', () => {
  it('RestaurantsInfoPage가 렌더링된다.', () => {
    render((
      <MemoryRouter>
        <RestaurantsInfoPage />
      </MemoryRouter>
    ));
  });

  it('식당 이름이 렌더링 된다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { container } = render((
      <MemoryRouter>
        <RestaurantsInfoPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
