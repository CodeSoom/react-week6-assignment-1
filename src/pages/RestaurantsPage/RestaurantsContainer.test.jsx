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
  given('selectedRegion', () => '서울');
  given('selectedCategory', () => '양식');

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurants: given.restaurants,
      selectedRegion: given.selectedRegion,
      selectedCategory: given.selectedCategory,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  context('without selectedRegion', () => {
    it('renders the message to let user click region button', () => {
      given('selectedRegion', () => '');

      const { container } = renderRestaurantsContainer({ path: '/restaurants' });

      expect(container).toHaveTextContent('지역를 클릭해주세요.');
    });
  });

  context('without selectedCategory', () => {
    it('renders the message to let user click region button', () => {
      given('selectedCategory', () => '');

      const { container } = renderRestaurantsContainer({ path: '/restaurants' });

      expect(container).toHaveTextContent('카테고리를 클릭해주세요.');
    });
  });

  context('without selectedRegion and selectedCategory', () => {
    it('renders the message to let user click both buttons', () => {
      given('selectedRegion', () => '');
      given('selectedCategory', () => '');
      given('restaurants', () => ([]));

      const { container } = renderRestaurantsContainer({ path: '/restaurants' });

      expect(container).toHaveTextContent('지역과 카테고리를 클릭해주세요.');
    });
  });

  context('without restaurants', () => {
    context('with selectedRegion and selectedCategory', () => {
      it("renders the message that there isn't a restaurant unavailable", () => {
        given('restaurants', () => ([]));

        const { container } = renderRestaurantsContainer({ path: '/restaurants' });

        expect(container).toHaveTextContent('해당 지역에 선택하신 분야 식당이 없습니다.');
      });
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
