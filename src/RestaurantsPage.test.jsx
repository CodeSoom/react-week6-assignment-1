import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import REGIONS from '../fixtures/regions';
import CATEGOREIS from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

import RestaurantsPage from './RestaurantsPage';

const mockPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory() {
    return { push: mockPush };
  },
}));

describe('RestaurantsPage', () => {
  const history = useHistory();

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      categories: CATEGOREIS,
      restaurants: RESTAURANTS,
    }));
  });

  it('지역과 카테고리 선택 버튼이 보여야 한다.', () => {
    const { queryByText } = render((
      <RestaurantsPage />
    ));

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });

  it('레스토랑들의 링크들이 보여야한다.', () => {
    const { container } = render((
      <RestaurantsPage />
    ));

    expect(container.innerHTML).toContain('<a href="');
  });

  it('레스토랑 링크를 클릭하면 history.push 가 발생해야한다.', () => {
    const restaurant = RESTAURANTS[0];

    const { getByText } = render((
      <RestaurantsPage />
    ));

    fireEvent.click(getByText(restaurant.name));

    expect(history.push).toBeCalledWith(`/restaurants/${restaurant.id}`);
  });
});
