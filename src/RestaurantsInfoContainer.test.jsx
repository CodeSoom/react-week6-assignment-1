import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsInfoContainer from './RestaurantsInfoContainer';

describe('RestaurantsInfoContainer', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((state) => state({
      restaurant: {
        id: 1,
        name: '양천주가',
      },
    }));
  });

  it('식당 이름을 렌더링 한다.', () => {
    const { container } = render((
      <RestaurantsInfoContainer restaurant="1" />
    ));

    expect(container).toHaveTextContent('양천주가');
  });
});
