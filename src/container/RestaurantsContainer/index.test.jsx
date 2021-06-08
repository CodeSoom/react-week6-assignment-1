import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from '.';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  const assignMock = jest.fn();

  beforeEach(() => {
    delete global.location;
    global.location = { assign: assignMock };

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  it('renders buttons', () => {
    const { getByRole } = render((
      <RestaurantsContainer />
    ));

    expect(getByRole('button', { name: '마법사주방' })).toBeInTheDocument();
  });

  it('listens click event', () => {
    const { getByRole } = render((
      <RestaurantsContainer />
    ));

    fireEvent.click(getByRole('button', { name: '마법사주방' }));

    expect(dispatch).toBeCalled();
  });

  it('renders the restaurant detail page when click restaurant button', () => {
    const { getByRole } = render(<RestaurantsContainer />);

    fireEvent.click(getByRole('button', { name: '마법사주방' }));

    expect(getByRole('heading', { name: '메뉴' }));
  });
});
