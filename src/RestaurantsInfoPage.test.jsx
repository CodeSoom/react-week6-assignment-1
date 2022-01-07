import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsInfoPage from './RestaurantsInfoPage';

describe('RestaurantsInfoPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '양천주가',
      },
    }));
  });

  it('RestaurantsInfoPage가 렌더링된다.', () => {
    render((
      <MemoryRouter>
        <RestaurantsInfoPage />
      </MemoryRouter>
    ));
  });

  it('식당 이름이 렌더링 된다.', () => {
    const params = { id: 1 };

    const { container } = render((
      <MemoryRouter>
        <RestaurantsInfoPage params={params} />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('1');
  });
});
