import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const restaurant = {
    name: '냠냠떡볶이',
    address: '화성시 동탄',
    menuItems: [
      { id: 1, name: '떡볶이' },
      { id: 2, name: '순대' },
    ],
  };

  it('show restaurant menus', () => {
    const { getByText } = render(
      <Restaurant restaurant={restaurant} />,
    );

    expect(getByText(/냠냠떡볶이/)).toBeInTheDocument();
    expect(getByText('떡볶이')).toBeInTheDocument();
    expect(getByText(/순대/)).toBeInTheDocument();
  });
});
