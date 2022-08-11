import { fireEvent, render, screen } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [{ id: 1, name: '마법사주방' }],
  }));

  const { container } = render((
    <MemoryRouter>
      <RestaurantsContainer />
    </MemoryRouter>
  ));

  fireEvent.click(screen.getByText('마법사주방'));

  expect(dispatch).toBeCalled();

  expect(container).toHaveTextContent('마법사주방');
});
