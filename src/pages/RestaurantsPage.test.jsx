import { render } from '@testing-library/react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();
  const renderRestaurantsPage = () => render((
    <MemoryRouter initialEntries={['/restaurants']}>
      <RestaurantsPage />
    </MemoryRouter>
  ));

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  it('액션이 디스패치된다.', () => {
    renderRestaurantsPage();

    expect(dispatch).toBeCalled();
  });

  it('식당 정보를 화면에 보여준다.', () => {
    const { queryByText } = renderRestaurantsPage();

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });
});
