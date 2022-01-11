import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import CategoriesContainer from './CategoriesContainer';

import CATEGORIES from '../../fixtures/categories';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  const KOREAN_FOOD = CATEGORIES[0];

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: CATEGORIES,
      selectedCategory: given.selectedCategory,
    }));
  });

  const renderCategoriesContainer = () => (render((
    <CategoriesContainer />
  )));

  context('with selectedCategory', () => {
    given('selectedCategory', () => KOREAN_FOOD);

    it('renders categories with selected category', () => {
      const { container } = renderCategoriesContainer();

      expect(container).toHaveTextContent(`${KOREAN_FOOD.name}(V)`);
    });
  });

  context('without selectedCategory', () => {
    given('selectedCategory', () => null);

    it('renders categories with selected category', () => {
      const { container, getByText } = renderCategoriesContainer();

      expect(container).toHaveTextContent(KOREAN_FOOD.name);

      fireEvent.click(getByText(KOREAN_FOOD.name));

      expect(dispatch).toBeCalled();
    });
  });
});
