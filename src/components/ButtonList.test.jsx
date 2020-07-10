import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ButtonList from './ButtonList';

import ITEMS from '../../fixtures/items';

describe('<ButtonList />', () => {
  const handleClickItem = jest.fn();

  const renderComponent = (items, selectedItem = null) => render((
    <ButtonList
      items={items}
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
      const { container } = renderComponent(ITEMS);
      const categoryButtons = container.querySelector('#button-list').children;
      expect(categoryButtons.length).toEqual(ITEMS.length);
    });

    context('when click category-button', () => {
      it('fired click event', () => {
        const { getAllByRole } = renderComponent(ITEMS);
        // When
        const categoryButtons = getAllByRole('button');
        categoryButtons.forEach((button) => fireEvent.click(button));
        // Then
        expect(handleClickItem).toBeCalledTimes(ITEMS.length);
      });
    });

    context('when select button', () => {
      it('selected-button contains checked-string', () => {
        const { getAllByRole } = renderComponent(ITEMS, ITEMS[0]);
        // When
        const categoryButtons = getAllByRole('button');
        // Then
        expect(categoryButtons[0].textContent).toBe(`${ITEMS[0].name}(V)`);
      });
    });
  });
});
