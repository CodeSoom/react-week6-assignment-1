import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import CategoryList from './CategoryList';
import CATEGORIES from '../../../fixtures/categories';

describe('CategoryList', () => {
  const handleSelectClick = jest.fn();

  const KOREAN_FOOD = CATEGORIES[0];

  const categoryListRender = ({ categories, selectedCategory }) => render((
    <CategoryList
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategoryClick={handleSelectClick}
    />
  ));

  context('with categories', () => {
    it('see renders categories', () => {
      const { getByText } = categoryListRender({
        categories: CATEGORIES,
        selectedCategory: KOREAN_FOOD,
      });

      CATEGORIES.forEach(({ id, name }) => {
        if (KOREAN_FOOD.id === id) {
          expect(getByText(`${name}(V)`)).not.toBeNull();
          return;
        }
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a category', () => {
      const { getByText } = categoryListRender({
        categories: CATEGORIES,
        selectedCategory: null,
      });

      CATEGORIES.forEach(({ name }) => {
        fireEvent.click(getByText(name));
        expect(getByText(name)).not.toBeNull();

        expect(handleSelectClick).toBeCalled();
      });
    });
  });

  context('without categories', () => {
    const categories = [];

    it('nothing render categories', () => {
      const { container } = categoryListRender({ categories, selectedCategory: null });

      expect(container).toBeEmptyDOMElement();
    });
  });
});
