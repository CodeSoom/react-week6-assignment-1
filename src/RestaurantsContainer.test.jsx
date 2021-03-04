import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import given from 'given2';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  const renderRestaurantsContainer = ({ path }) => render((
    <MemoryRouter initialEntries={[path]}>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  given('restaurants', () => ([
    { id: 3, name: '마법사주방' },
  ]));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurants: given.restaurants,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  context('without restaurants', () => {
    it("renders the message that there isn't a restaurant unavailable", () => {
      given('restaurants', () => ([]));

      const { container } = renderRestaurantsContainer({ path: '/restaurants' });

      expect(container).toHaveTextContent('해당 지역에 선택하신 분야 식당이 없습니다.');
    });
  });

  context('with restaurants', () => {
    it('renders name of the restaurants', () => {
      const { container } = renderRestaurantsContainer({ path: '/restaurants' });

      expect(container).toHaveTextContent('마법사주방');
    });

    it('renders Restaurant Detail', () => {
      const { container, getByText } = renderRestaurantsContainer({ path: '/restaurants' });

      expect(container).toHaveTextContent('마법사주방');

      fireEvent.click(getByText('마법사주방'));

      expect(dispatch).toBeCalled();
    });
  });
});
