import { render } from '@testing-library/react';
import MenuItems from './MenuItems';

describe('MenuItems', () => {
  context('with menu items', () => {
    it('메뉴가 보여집니다.', () => {
      const menuItems = [
        { id: 1, name: '공기밥' },
      ];

      const { container } = render(<MenuItems menuItems={menuItems} />);

      expect(container).toHaveTextContent('공기밥');
    });
  });

  context('without menu items', () => {
    it('메뉴가 없어요 문구가 보여집니다.', () => {
      const menuItems = [];

      const { container } = render(<MenuItems menuItems={menuItems} />);

      expect(container).toHaveTextContent('메뉴가 없어요');
    });
  });
});
