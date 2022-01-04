import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

import REGIONS from '../../fixtures/regions';
import CATEGORIES from '../../fixtures/categories';
import RESTAURANTS from '../../fixtures/restaurants';

jest.mock('react-redux');
describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('renders Home', () => {
    const { queryByText } = render((
      <MemoryRouter initailEntires={['/']}>
        <App />
      </MemoryRouter>
    ));

    expect(queryByText('헤더'));
    expect(queryByText('About'));
    expect(queryByText('Restaurant'));

    expect(dispatch).toBeCalledTimes(1);
  });

  it('renders  About', () => {
    const { queryByText } = render((
      <MemoryRouter initailEntires={['/about']}>
        <App />
      </MemoryRouter>
    ));

    expect(queryByText('About'));
    expect(queryByText('About 페이지 입니다.'));
    expect(dispatch).toBeCalledTimes(2);
  });

  it('renders Restaurant', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGORIES,
      restaurants: RESTAURANTS,
    }));

    const { container, queryByText } = render((
      <MemoryRouter initailEntires={['/restaurants']}>
        <App />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('서울');
    // console.log(container)

    REGIONS.forEach((REGION) => expect(queryByText(REGION.name)));
    CATEGORIES.forEach((CATEGORY) => expect(queryByText(CATEGORY.name)));
    RESTAURANTS.forEach((RESTAURANT) => expect(queryByText(RESTAURANT.name)));

    expect(dispatch).toBeCalledTimes(3);
  });
});
