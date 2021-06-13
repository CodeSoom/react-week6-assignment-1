import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import RestaurantPage from '.';

import restaurant from '../../../fixtures/restaurant';

jest.mock('react-redux');
jest.mock('react-router');

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useParams.mockImplementation(() => ({ id: 1 }));

    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderRestaurantPage() {
    return render((
      <RestaurantPage />
    ));
  }

  context('with restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant,
      }));
    });

    it('renders title', () => {
      const { getByRole } = renderRestaurantPage();

      expect(getByRole('heading', { name: '메뉴' })).toBeInTheDocument();
    });
  });

  context('without restaurant', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: null,
      }));
    });

    it('renders loading', () => {
      const { getByText } = renderRestaurantPage();

      expect(getByText('Loading...')).toBeInTheDocument();
    });
  });
});
