import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import CATEGORIES from '../fixtures/categories';

function renderCategoriesContainer() {
  return render(<CategoriesContainer />);
}

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  const KOREAN_FOOD = CATEGORIES[0];

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        categories: CATEGORIES,
        selectedCategory: KOREAN_FOOD,
      }));
    });

    it('renders categories with selected category', () => {
      const { container } = renderCategoriesContainer();

      expect(container).toHaveTextContent(`${KOREAN_FOOD.name}(V)`);
    });
  });

  context('without selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        categories: CATEGORIES,
      }));
    });

    it('renders categories with selected category', () => {
      const { container, getByText } = renderCategoriesContainer();

      expect(container).toHaveTextContent(KOREAN_FOOD.name);

      fireEvent.click(getByText(KOREAN_FOOD.name));

      expect(dispatch).toBeCalled();
    });
  });
});
