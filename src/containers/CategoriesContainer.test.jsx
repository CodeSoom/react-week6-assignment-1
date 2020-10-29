import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../../fixtures/categories';

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  const KOREAN_FOOD = categories[0];

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('with selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        categories,
        selectedCategory: KOREAN_FOOD,
      }));
    });

    it('renders categories with selected category', () => {
      const { container } = render((
        <CategoriesContainer />
      ));

      expect(container).toHaveTextContent(`${KOREAN_FOOD.name}(V)`);
    });
  });

  context('without selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        categories,
      }));
    });

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
