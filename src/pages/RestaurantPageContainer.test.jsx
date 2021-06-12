import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import given from 'given2';
import { setSelectedRestaurant } from '../redux_module/RestaurantSlice';
import RestaurantPageContainer from './RestaurantPageContainer';

jest.mock('react-redux');
jest.mock('react-router');

describe('RestaurantPageContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  beforeAll(() => {
    useParams.mockImplementation(() => ({ id: 1 }));
    useDispatch.mockImplementation(() => dispatch);
  });

  describe('state updating feature', () => {
    beforeAll(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          information: {
            name: null,
            address: null,
            menuItems: [],
          },
        },
      }));
    });

    it('initializes informations of selected restaurant', () => {
      render(<RestaurantPageContainer />);

      expect(dispatch).nthCalledWith(
        1,
        setSelectedRestaurant({ name: null, address: null, menuItems: [] }),
      );
    });

    it('loads informations of selected restaurant after initialization', () => {
      render(<RestaurantPageContainer />);

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  describe('loading feature', () => {
    beforeAll(() => {
      useSelector.mockImplementation((selector) => selector({
        restaurant: {
          information: given.information,
        },
      }));
    });

    context('when restaurant information loading not finished', () => {
      given('information', () => ({ name: null, address: null, menuItems: [] }));

      it('renders loading message', () => {
        const { container } = render(<RestaurantPageContainer />);

        expect(container).toHaveTextContent('loading');
      });
    });

    context('when restaurant information loading finished', () => {
      given('information', () => ({ name: '양천주가', address: '서울시 강남', menuItems: ['비빔밥'] }));

      it("doesn't renders loading message", () => {
        const { container } = render(<RestaurantPageContainer />);

        expect(container).not.toHaveTextContent('loading');
      });
    });
  });
});
