import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '한신포차' },
      ],
    }));
  });
  function renderRestaurantsPage() {
    return render((
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    ));
  }
  it('render regions and categories', () => {
    const { queryByText } = renderRestaurantsPage();

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });

  it('render restaurants links', () => {
    const { container } = renderRestaurantsPage();

    expect(container.innerHTML).toContain('<a href="');
  });
});
