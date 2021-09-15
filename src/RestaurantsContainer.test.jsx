import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { container, getByText } = render((
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  expect(container).toHaveTextContent('마법사주방');

  fireEvent.click(getByText('마법사주방'));

  expect(dispatch).toBeCalled();
});
