import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
    jest.clearAllMocks();
  });

  const renderRestaurant = () => render((
    <RestaurantsContainer />
  ));

  it('render restaurnats', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent('마법사주방');
  });

  it('changes selectedRestaurantId to click restaurant', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByAltText } = renderRestaurant();

    fireEvent.click(getByAltText('마법사주방'));

    expect(dispatch).toBeCalled();
  });
});
