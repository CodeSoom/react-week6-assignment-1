import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import given from 'given2';

import RestaurantDetail from './RestaurantDetail';

import RESTAURANT from '../fixtures/restaurant';

describe('RestaurantDetail', () => {
  beforeEach(() => {
    given('restaurant', () => RESTAURANT);
    given('loading', () => false);
    given('error', () => false);
  });

  const renderRestaurantDetail = () => render((
    <RestaurantDetail
      restaurant={given.restaurant}
      loading={given.loading}
      error={given.error}
    />
  ));

  context('with error', () => {
    given('error', () => true);

    it('renders "잘못된 경로 입니다."', () => {
      const { container } = renderRestaurantDetail();

      expect(container).toHaveTextContent('잘못된 경로 입니다.');
    });
  });

  context('when load restaurant', () => {
    given('loading', () => true);
    given('restaurant', () => ({}));

    it('renders "loading..."', () => {
      const { container } = renderRestaurantDetail();

      expect(container).toHaveTextContent('loading...');
    });
  });

  context('without restaurant data', () => {
    given('loading', () => false);
    given('restaurant', () => undefined);

    it('renders "loading..."', () => {
      const { container } = renderRestaurantDetail();

      expect(container).toHaveTextContent('loading...');
    });
  });

  context('with restaurant', () => {
    given('loading', () => false);
    given('restaurant', () => RESTAURANT);

    it('renders restaurant name', () => {
      const { container } = renderRestaurantDetail();

      expect(container).toHaveTextContent('성전떡볶이');
    });

    it('renders restaurant address', () => {
      const { container } = renderRestaurantDetail();

      expect(container).toHaveTextContent('주소: 서울 강남구 강남대로94길 21');
    });

    it('renders menu', () => {
      const { container } = renderRestaurantDetail();

      expect(container).toHaveTextContent('메뉴');

      ['떡볶이', '튀김', '오뎅', '컵밥'].forEach((menu) => (
        expect(container).toHaveTextContent(menu)
      ));
    });
  });
});
