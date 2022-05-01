import given from 'given2';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import CATEGORIES from '../fixtures/categories';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const KOREAN_FOOD = CATEGORIES[0];

  given('state', () => ({
    categories: CATEGORIES,
    selectedCategory: given.selectedCategory,
  }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(given.state));
    jest.clearAllMocks();
  });

  context('with selectedCategory', () => {
    given('selectedCategory', () => KOREAN_FOOD);

    it('renders categories with selected category', () => {
      const { container } = render((
        <CategoriesContainer />
      ));

      expect(container).toHaveTextContent(`${KOREAN_FOOD.name}(V)`);
    });
  });

  context('without selectedCategory', () => {
    given('selectedCategory', () => null);

    it('renders categories with selected category', () => {
      const { container, getByText } = render((
        <CategoriesContainer />
      ));

      expect(container).toHaveTextContent(KOREAN_FOOD.name);

      fireEvent.click(getByText(KOREAN_FOOD.name));

      expect(dispatch).toBeCalled();
    });
  });
});
