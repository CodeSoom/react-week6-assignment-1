import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

describe('RestaurantsPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  it('카테고리와 지역이 보여집니다.', () => {
    const { container } = render((
      <RestaurantsPage />
    ));

    expect(dispatch).toBeCalled();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('한식');
  });
});
