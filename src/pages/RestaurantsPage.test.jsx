import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantsPage from './RestaurantsPage';
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

  const renderRestaurantsPage = () => render(<RestaurantsPage />);

  it('regionsContainer가 렌더링된다.', () => {
    const { container } = renderRestaurantsPage();
    expect(container).toHaveTextContent('서울');
  });

  it('categoriesContainer가 렌더링된다.', () => {
    const { container } = renderRestaurantsPage();
    expect(container).toHaveTextContent('한식');
  });

  it('restaurantsContainer 렌더링된다.', () => {
    const { container } = renderRestaurantsPage();
    expect(container).toHaveTextContent('마법사주방');
  });
});
