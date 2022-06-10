import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import RESTAURANTS from '../fixtures/restaurants';

const dispatch = jest.fn();

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: RESTAURANTS,
    }));
  });

  it('레스토랑 목록이 보인다.', () => {
    const { container } = render((
      <RestaurantsContainer />
    ));

    expect(container).toHaveTextContent(RESTAURANTS[0].name);
  });

  it('레스토랑 목록을 클릭하면 dispatch가 호출된다.', () => {
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <RestaurantsContainer />
    ));

    fireEvent.click(getByText(RESTAURANTS[0].name));

    expect(dispatch).toBeCalled();
  });
});
