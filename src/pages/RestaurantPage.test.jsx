import { render } from '@testing-library/react';

import RestaurantPage from './RestaurantPage';

describe('RestaurantPage', () => {
  it('renders restaurant name, address, menus', () => {
    const { container } = render(
      <RestaurantPage
        name="양천주가"
        address="서울 강남구"
        menuItems={['비빔밥']}
      />,
    );

    expect(container).toHaveTextContent('양천주가');
    expect(container).toHaveTextContent('서울 강남구');
    expect(container).toHaveTextContent('비빔밥');
  });
});
