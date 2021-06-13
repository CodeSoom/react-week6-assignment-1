import { fireEvent, render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from '.';

describe('RestaurantsContainer', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  it('renders restaurants', () => {
    const { getByRole } = render((
      <RestaurantsContainer onClickChangeRoute={handleClick} />
    ));

    expect(getByRole('link', { name: '마법사주방' })).toBeInTheDocument();
  });

  it('listens click event', () => {
    const { getByRole } = render((
      <RestaurantsContainer onClickChangeRoute={handleClick} />
    ));

    fireEvent.click(getByRole('link', { name: '마법사주방' }));

    expect(handleClick).toBeCalled();
  });
});
