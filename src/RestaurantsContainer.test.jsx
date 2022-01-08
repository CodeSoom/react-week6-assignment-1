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

  const { container } = render((
    <RestaurantsContainer Link={Link} />
  ));

  expect(container).toHaveTextContent('양천주가');
});
