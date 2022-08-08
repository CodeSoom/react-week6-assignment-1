import { fireEvent, render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with restaurants', () => {
    it('RestaurantsContainer', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          { id: 1, name: '마법사주방' },
        ],
      }));

      const { container } = render((
        <RestaurantsContainer />
      ));

      expect(container).toHaveTextContent('마법사주방');
    });
  });

  it('listens to click on a restaurant', () => {
    const { getByText } = render((
      <RestaurantsContainer />
    ));
    const onClick = jest.fn();

    fireEvent.click(getByText('마법사주방'));

    expect(onClick).toBeCalled();
  });
});
