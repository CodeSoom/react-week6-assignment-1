import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';
import RESTAURANTS from '../fixtures/restaurants';

describe('RestaurantsPage', () => {
  const SEOUL = REGIONS[0];
  const KOREAN_FOOD = CATEGORIES[0];
  const KIMBAPHEAVEN = RESTAURANTS;

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      selectedRegion: SEOUL,

      categories: CATEGORIES,
      selectedCategory: KOREAN_FOOD,

      restaurants: KIMBAPHEAVEN,
    }));
  });

  function renderRestaurantsPage() {
    return render((
      <RestaurantsPage />
    ));
  }

  it('지역버튼이 렌더링된다', () => {
    const { container } = renderRestaurantsPage();

    expect(container).toHaveTextContent(SEOUL.name);
  });

  it('음식종류 버튼이 렌더링된다', () => {
    const { container } = renderRestaurantsPage();

    expect(container).toHaveTextContent(KOREAN_FOOD.name);
  });

  it('레스토랑들이 렌더링된다', () => {
    const { container } = renderRestaurantsPage();

    expect(container).toHaveTextContent(KIMBAPHEAVEN[0].name);
  });
});
