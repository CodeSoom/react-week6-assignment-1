import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import CATEGORIES from '../../fixtures/categories';

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

    it('renders categories', () => {
      const { container } = render((
        <CategoriesContainer />
      ));

      expect(container).toHaveTextContent(`${KOREAN_FOOD.name}(V)`);
    });
  });

  context('without selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        categories: CATEGORIES,
      }));
    });

    it('renders categories', () => {
      const { container } = render((
        <CategoriesContainer />
      ));

      expect(container).toHaveTextContent(KOREAN_FOOD.name);
    });

    it('renders button to listent to click event', () => {
      const { getByText } = render((
        <CategoriesContainer />
      ));

      fireEvent.click(getByText(KOREAN_FOOD.name));

      expect(dispatch).toBeCalled();
    });
  });
});
