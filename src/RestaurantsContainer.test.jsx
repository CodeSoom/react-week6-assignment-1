import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  const { container, getByText } = render((
    <RestaurantsContainer />
  ));

  expect(container).toHaveTextContent('마법사주방');
  expect(getByText('마법사주방')).toContainHTML('a');
  expect(getByText('마법사주방')).toHaveAttribute('href', `/restaurants${1}`);

  fireEvent.click(getByText('마법사주방'));
});
