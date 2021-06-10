import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from '../redux_module/RestaurantSlice';
import RegionListContainer from './RegionListContainer';

jest.mock('react-redux');

describe('RegionListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  beforeAll(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        regions: [
          { id: 1, name: '서울' },
          { id: 2, name: '부산' },
        ],

        selected: {
          category: { id: null },
          region: { name: '서울' },
        },
      },
    }));
  });

  it('renders buttons with (V) when selected', () => {
    const { getByRole, queryByRole } = render(<RegionListContainer />);

    expect(getByRole('button', { name: '서울(V)' })).toBeInTheDocument();
    expect(queryByRole('button', { name: '서울' })).not.toBeInTheDocument();

    expect(getByRole('button', { name: '부산' })).toBeInTheDocument();
  });

  it('selects region with button', () => {
    const { getByRole } = render(<RegionListContainer />);

    fireEvent.click(getByRole('button', { name: '서울(V)' }));
    expect(dispatch).toBeCalledWith(selectRegion({ id: 1, name: '서울' }));

    fireEvent.click(getByRole('button', { name: '부산' }));
    expect(dispatch).toBeCalledWith(selectRegion({ id: 2, name: '부산' }));
  });

  it('fetches regions with button', () => {
    const { getByRole } = render(<RegionListContainer />);

    fireEvent.click(getByRole('button', { name: '부산' }));
    expect(typeof dispatch.mock.calls[1][0]).toBe('function');
  });
});
