import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

import { useDispatch, useSelector } from 'react-redux';


jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const CATEGORY = categories[0];
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear(); //??
    useDispatch.mockImplementation(() => dispatch);
  });
  

  context('with selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector(
        {
          categories,
          selectedCategoryId: CATEGORY.id,
        }
      ));
    });
    it('renders categories with selected category', () => {
      const { getByText } = render((
        <RegionsContainer />
      ));
      expect(getByText(`${CATEGORY.name}(v)`)).not.toBeNull();
    })
  });

  context('without selectedCategory', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector(
        {
          categories,
        }
      ));
    });
    it('renders categories with selected Category', () => {
      const { getByText } = render((
        <CategoriesContainer />
      ));
      expect(getByText(CATEGORY.name)).not.toBeNull();
      fireEvent.click(getByText(CATEGORY.name));
      expect(dispatch).toBeCalled();
    })
  });
});
