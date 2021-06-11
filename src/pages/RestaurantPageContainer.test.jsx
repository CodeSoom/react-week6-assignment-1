import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        information: {
          name: '',
          address: '',
          menuItems: [],
        },
      },
    }));
  });

  it('loads informations of selected restaurant', () => {
    render(<RestaurantPageContainer />);

    expect(dispatch).toBeCalled();
  });

  it('loads informations of selected restaurant', () => {
    render(<RestaurantPageContainer />);

    expect(useParams).toBeCalled();
  });
});
