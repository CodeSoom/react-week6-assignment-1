import { render } from '@testing-library/react';

import MenuItems from './MenuItems';

describe('MenuItems', () => {
  context('메뉴 아이템이 있을 때', () => {
    it('메뉴를 렌더링한다.', () => {
      const menuItems = [
        { id: 1, name: '공기밥' },
      ];

      const { container } = render((
        <MenuItems menuItems={menuItems} />
      ));

      expect(container).toHaveTextContent('공기밥');
    });
  });

  context('메뉴 아이템이 없을 때', () => {
    it('"메뉴가 없어요!"를 렌더링 한다.', () => {
      [[], null, undefined].forEach((menuItems) => {
        const { container } = render((
          <MenuItems menuItems={menuItems} />
        ));

        expect(container).toHaveTextContent('메뉴가 없어요!');
      });
    });
  });
});
