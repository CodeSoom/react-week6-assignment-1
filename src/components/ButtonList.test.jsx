import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ButtonList from './ButtonList';

import CATEGORIES from '../../fixtures/categories';

describe('<ButtonList />', () => {
  const handleClickItem = jest.fn();

  const renderComponent = (categories, selectedItem = null) => render((
    <ButtonList
      items={categories}
      selectedItem={selectedItem}
      handleClickItem={handleClickItem}
    />
  ));

  context('without categories', () => {
    it('display no category-buttons', () => {
      const { container } = renderComponent([]);
      const categoryButtons = container.querySelector('#button-list').children;
      expect(categoryButtons.length).toEqual(0);
    });
  });

  context('with categories', () => {
    it('display category-buttons', () => {
      const { container } = renderComponent(CATEGORIES);
      const categoryButtons = container.querySelector('#button-list').children;
      expect(categoryButtons.length).toEqual(CATEGORIES.length);
    });

    context('when click category-button', () => {
      it('fired click event', () => {
        const { getAllByRole } = renderComponent(CATEGORIES);
        // When
        const categoryButtons = getAllByRole('button');
        categoryButtons.forEach((button) => fireEvent.click(button));
        // Then
        expect(handleClickItem).toBeCalledTimes(CATEGORIES.length);
      });
    });

    context('when select button', () => {
      it('selected-button contains checked-string', () => {
        const { getAllByRole } = renderComponent(CATEGORIES, CATEGORIES[0]);
        // When
        const categoryButtons = getAllByRole('button');
        // Then
        expect(categoryButtons[0].textContent).toBe(`${CATEGORIES[0].name}(V)`);
      });
    });
  });
});
