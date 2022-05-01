import { render } from '@testing-library/react';

import given from 'given2';

import MenuItems from './MenuItems';

import RESTAURANT from '../fixtures/restaurant';

describe('MenuItems', () => {
  beforeEach(() => {
    given('menuItems', () => []);
  });

  const renderMenuItems = () => render((
    <MenuItems
      menu={given.menuItems}
    />
  ));

  context('without menu items data', () => {
    given('menuItems', () => []);

    it('renders "등록된 메뉴가 없습니다."', () => {
      const { container } = renderMenuItems();

      expect(container).toHaveTextContent('등록된 메뉴가 없습니다.');
    });
  });

  it('renders menu', () => {
    const { container } = renderMenuItems();

    expect(container).toHaveTextContent('메뉴');

    ['떡볶이', '튀김', '오뎅', '컵밥'].forEach((menu) => (
      expect(container).toHaveTextContent(menu)
    ));
  });
});
