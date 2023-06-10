import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantsPage from './RestaurantsPage';
import { MemoryRouter } from 'react-router-dom';
RestaurantsPage;

describe('RestaurantsPage', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        regions: [{ id: 1, name: '서울' }],
        categories: [{ id: 1, name: '한식' }],
        restaurants: [{ id: 1, name: '마법사주방' }],
      })
    );
  });

  const renderRestaurantsPage = () =>
    render(
      <MemoryRouter>
        <RestaurantsPage />
      </MemoryRouter>
    );
  const testContents = ['서울', '한식', '마법사주방'];

  it('각각의 컨테이너가 렌더링 된다.', () => {
    const { container } = renderRestaurantsPage();
    testContents.forEach((item) => {
      expect(container).toHaveTextContent(item);
    });
  });

  it('레스토랑 컨테이너가 렌더링 된다.', () => {
    const { container } = renderRestaurantsPage();

    expect(container).toHaveTextContent('마법사주방');
  });
});
