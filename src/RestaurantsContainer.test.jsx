import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '양천주가' },
    ],
  }));

  const Link = ({ children }) => (<>{children}</>);

  const { container, queryByText } = render((
    <RestaurantsContainer Link={Link} />
  ));

  expect(container).toHaveTextContent('양천주가');
  const url = queryByText('양천주가');
  expect(url).toHaveAttribute('href', '/restaurants/1');
});
