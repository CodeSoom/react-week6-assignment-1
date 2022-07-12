import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';

describe('RestaurantsPage', () => {
  const SEOUL = REGIONS[0];
  const KOREAN_FOOD = CATEGORIES[0];

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: REGIONS,
      selectedRegion: SEOUL,

      categories: CATEGORIES,
      selectedCategory: KOREAN_FOOD,

      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
    }));
  });

  function renderRestaurantsPage() {
    return render((
      <RestaurantsPage />
    ));
  }

  it('RegionsContainer가 렌더링된다', () => {
    const { container } = renderRestaurantsPage();

    expect(container).toHaveTextContent(SEOUL.name);
  });
});
