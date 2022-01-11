import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import CATEGORIES from '../../fixtures/categories';

describe('Categories', () => {
  const KOREAN_FOOD = CATEGORIES[0];

  const handleClick = jest.fn();

  context('with selectedCategory', () => {
    it('renders categories with selected category', () => {
      const { container } = render((
        <Categories
          categories={CATEGORIES}
          selectedCategory={KOREAN_FOOD}
        />
      ));

      expect(container).toHaveTextContent(`${KOREAN_FOOD.name}(V)`);
    });
  });

  context('without selectedCategory', () => {
    it('renders categories with selected category', () => {
      const { container, getByText } = render((
        <Categories
          categories={CATEGORIES}
          onClick={handleClick}
        />
      ));

      expect(container).toHaveTextContent(KOREAN_FOOD.name);

      fireEvent.click(getByText(KOREAN_FOOD.name));

      expect(handleClick).toBeCalled();
    });
  });
});
